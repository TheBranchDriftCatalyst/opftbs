import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict();

export const ReviewAvgAggregateInputObjectSchema = Schema;
