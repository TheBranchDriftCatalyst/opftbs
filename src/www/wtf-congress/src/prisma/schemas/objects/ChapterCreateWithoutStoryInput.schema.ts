import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterCreateWithoutStoryInput> = z
  .object({
    index: z.number().optional(),
    title: z.string().optional().nullable(),
    content: z.string(),
  })
  .strict();

export const ChapterCreateWithoutStoryInputObjectSchema = Schema;
