import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    views: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const StatsCountAggregateInputObjectSchema = Schema;
