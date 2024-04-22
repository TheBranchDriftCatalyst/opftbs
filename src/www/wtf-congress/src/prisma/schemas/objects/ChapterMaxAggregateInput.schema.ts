import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterMaxAggregateInputType> = z
  .object({
    index: z.literal(true).optional(),
    title: z.literal(true).optional(),
    content: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
  })
  .strict();

export const ChapterMaxAggregateInputObjectSchema = Schema;
