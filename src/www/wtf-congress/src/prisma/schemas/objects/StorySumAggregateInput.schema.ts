import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StorySumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    statsId: z.literal(true).optional(),
  })
  .strict();

export const StorySumAggregateInputObjectSchema = Schema;
