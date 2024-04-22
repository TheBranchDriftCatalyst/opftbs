import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateManyStatsInput> = z
  .object({
    id: z.number().optional(),
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    authorId: z.number(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const StoryCreateManyStatsInputObjectSchema = Schema;
