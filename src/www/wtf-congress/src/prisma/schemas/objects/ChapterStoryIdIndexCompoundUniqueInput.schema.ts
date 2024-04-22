import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterStoryIdIndexCompoundUniqueInput> = z
  .object({
    storyId: z.number(),
    index: z.number(),
  })
  .strict();

export const ChapterStoryIdIndexCompoundUniqueInputObjectSchema = Schema;
