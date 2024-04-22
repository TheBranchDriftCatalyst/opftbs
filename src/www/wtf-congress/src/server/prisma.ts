/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { Prisma, PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

export const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma;
}

prisma.$extends({
  result: {
    // story: {
    tagsOnStories: {
      name: {
        needs: { tag: true },
        compute(storyTag) {
          return storyTag.tag.name;
        },
      },
    },
    // },
  },
});

prisma.$extends({
  name: 'autoIncrementChapterIndex',
  model: {
    chapter: {
      async create({ storyId, ...rest }: Prisma.ChapterUncheckedCreateInput) {
        // Fetch the highest chapterIndex for the given storyId
        const lastChapter = await prisma.chapter.findFirst({
          where: { storyId: storyId },
          orderBy: { chapterIndex: 'desc' },
          select: { chapterIndex: true },
        });

        // Determine the next chapterIndex
        const nextChapterIndex = lastChapter ? lastChapter.chapterIndex + 1 : 1;

        // Create the new chapter with the next chapterIndex
        return prisma.chapter.create({
          data: {
            storyId: storyId,
            ...rest,
            chapterIndex: nextChapterIndex,
          },
        });
      },
    },
  },
});

prisma.$extends({
  name: 'bcryptPassword',
  model: {
    user: {
      // Extend the create method to hash password before user creation
      async create(data: Prisma.UserUncheckedCreateInput) {
        if (data.password) {
          const hashedPassword = await bcrypt.hash(data.password, 10);
          console.log('user create bcryptPassword middleware');
          return prisma.user.create({
            data: { ...data, password: hashedPassword },
          });
        }
        return prisma.user.create({ data });
      },

      // Extend the update method to hash password before updating user
      async update(params: Prisma.UserUpdateArgs) {
        if (params.data?.password) {
          const hashedPassword = await bcrypt.hash(params.data.password, 10);
          console.log('user update bcryptPassword middleware');
          return prisma.user.update({
            ...params,
            data: { ...params.data, password: hashedPassword },
          });
        }
        return prisma.user.update(params);
      },
    },
  },
});
