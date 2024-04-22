import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    statsId: z.literal(true).optional(),
  })
  .strict();

export const StoryAvgAggregateInputObjectSchema = Schema;
