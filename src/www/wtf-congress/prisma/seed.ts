import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { Prisma, PrismaClient } from '@prisma/client';
import { parse } from 'date-fns';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { v4 as uuid } from 'uuid';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
});

function cleanContent(content: string): string {
  return content.replace(/[^\x20-\x7E]/g, '');
}

if (isMainThread) {
  mainThread();
} else {
  workerThread(workerData);
}

async function mainThread() {
  console.time('seeding');
  try {
    const folderPath = '../scripts/downloaded';
    console.log(`Importing stories from folder: ${folderPath}`);

    const fileNames = await readdir(folderPath);
    const jsonFiles = fileNames.filter((file) => file.endsWith('.json'));

    const numThreads = 5; // Adjust as needed
    const chunkSize = Math.ceil(jsonFiles.length / numThreads);
    console.log(`using threads ${numThreads} and chunk size ${chunkSize}`);
    const workers = [];

    for (let i = 0; i < numThreads; i++) {
      const start = i * chunkSize;
      const end = start + chunkSize;
      const chunk = jsonFiles.slice(start, end);
      const worker = new Worker(__filename, {
        workerData: { chunk, folderPath },
      });
      workers.push(worker);
    }

    workers.forEach((worker) => {
      worker.on('message', (message) => console.log(message));
      worker.on('error', (error) => console.error('Worker error:', error));
      worker.on('exit', (code) => {
        if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
      });
    });
  } catch (error) {
    console.error('Error in main thread:', error);
  }
  console.timeEnd('Seeding');
}

const errorFiles: string[] = [];

// When we insert in parallel like this we could run into an issue when two threads are doing a create operation at the same time
// this will cause a unique constraint error, so we retry the operation a few times before giving up, the second time it should work.
const retryPrismaOperation = async (
  operation: () => Prisma.Prisma__StoryClient<import('.prisma/client').Story>,
  retries = 3,
  delay = 1000 * 5,
) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.warn(
        `Retry ${attempt}/${retries} failed with unique constraint error. Retrying in ${delay}ms...`,
      );
      if (attempt < retries) await new Promise((res) => setTimeout(res, delay));
    }
  }
  errorFiles.push(workerData.chunk);
};

async function workerThread(data: { chunk: string[]; folderPath: string }) {
  const workerName = uuid();
  console.time(`worker-${workerName}`);
  try {
    const { chunk, folderPath } = data;
    for (const file of chunk) {
      const filePath = path.join(folderPath, file);
      const fileContent = await readFile(filePath, 'utf-8');
      const storyData = JSON.parse(fileContent);
      const addedOnString = storyData.addedOn.replace('Added on: ', '');
      const addedOnDate = parse(addedOnString, 'MMM dd, yyyy', new Date());

      await retryPrismaOperation(() => {
        const story = {
          uuid: storyData.id,
          title: storyData.title.trim(),
          summary: storyData.summary.trim(),
          createdAt: addedOnDate,
          author: {
            connectOrCreate: {
              where: { username: storyData.author.trim() },
              create: {
                username: storyData.author.trim(),
                virtualAuthor: true,
              },
            },
          },
          tags: {
            create: storyData.tags.map((tagName: string) => ({
              tag: {
                connectOrCreate: {
                  create: { name: tagName.trim() },
                  where: { name: tagName.trim() },
                },
              },
            })),
          },
          stats: {
            create: {
              views: storyData.stats.views,
            },
          },
          chapters: {
            create: storyData.chapters.map((content: string) => ({
              content: cleanContent(content),
            })),
          },
        };
        return prisma.story.upsert({
          where: { uuid: storyData.id },
          update: story,
          create: story,
        });
      });
    }
    parentPort!.postMessage('Worker completed successfully.');
    console.time(`worker-${workerName}`);
  } catch (error) {
    console.error('Error in worker thread:', error);
  } finally {
    await prisma.$disconnect();
    console.log(
      `the following files failed ${errorFiles.length}\n`,
      errorFiles,
    );
  }
}
