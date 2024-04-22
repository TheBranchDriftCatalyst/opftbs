import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterSumAggregateInputType> = z
  .object({
    index: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
  })
  .strict();

export const ChapterSumAggregateInputObjectSchema = Schema;
