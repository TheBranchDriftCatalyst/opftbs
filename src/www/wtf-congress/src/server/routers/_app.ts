/**
 * This file contains the root router of your tRPC-backend
 */
import { router, publicProcedure } from '../trpc';
import { observable } from '@trpc/server/observable';
import { clearInterval } from 'timers';
import { appRouter as prismaAppRouter } from '@/prisma/routers';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  prisma: prismaAppRouter,

  changelog: publicProcedure.query(async () => {
    const fullPath = path.join(process.cwd(), 'CHANGELOG.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: meta, content } = matter(fileContents);

    return {
      meta,
      content: await markdownToHtml(content),
    };
  }),

  randomNumber: publicProcedure.subscription(() => {
    return observable<number>((emit) => {
      const int = setInterval(() => {
        emit.next(Math.random());
      }, 500);
      return () => {
        clearInterval(int);
      };
    });
  }),
});

export type AppRouter = typeof appRouter;
