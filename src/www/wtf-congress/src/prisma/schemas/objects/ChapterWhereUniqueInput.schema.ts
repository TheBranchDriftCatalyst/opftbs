import { z } from 'zod';
import { ChapterStoryIdIndexCompoundUniqueInputObjectSchema } from './ChapterStoryIdIndexCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterWhereUniqueInput> = z
  .object({
    storyId_index: z
      .lazy(() => ChapterStoryIdIndexCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ChapterWhereUniqueInputObjectSchema = Schema;
