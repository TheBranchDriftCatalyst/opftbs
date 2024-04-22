import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    uuid: z.literal(true).optional(),
    title: z.literal(true).optional(),
    summary: z.literal(true).optional(),
    authorId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    statsId: z.literal(true).optional(),
  })
  .strict();

export const StoryMaxAggregateInputObjectSchema = Schema;
