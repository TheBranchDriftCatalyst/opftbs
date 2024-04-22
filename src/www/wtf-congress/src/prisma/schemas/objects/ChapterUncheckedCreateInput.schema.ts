import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUncheckedCreateInput> = z
  .object({
    index: z.number().optional(),
    title: z.string().optional().nullable(),
    content: z.string(),
    storyId: z.number(),
  })
  .strict();

export const ChapterUncheckedCreateInputObjectSchema = Schema;
