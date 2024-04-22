import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUncheckedCreateWithoutStoryInput> = z
  .object({
    index: z.number().optional(),
    title: z.string().optional().nullable(),
    content: z.string(),
  })
  .strict();

export const ChapterUncheckedCreateWithoutStoryInputObjectSchema = Schema;
