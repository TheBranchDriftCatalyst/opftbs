import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterAvgAggregateInputType> = z
  .object({
    index: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
  })
  .strict();

export const ChapterAvgAggregateInputObjectSchema = Schema;
