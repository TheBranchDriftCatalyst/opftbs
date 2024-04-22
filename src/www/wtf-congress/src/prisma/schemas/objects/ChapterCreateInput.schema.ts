import { z } from 'zod';
import { StoryCreateNestedOneWithoutChaptersInputObjectSchema } from './StoryCreateNestedOneWithoutChaptersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterCreateInput> = z
  .object({
    index: z.number().optional(),
    title: z.string().optional().nullable(),
    content: z.string(),
    Story: z.lazy(() => StoryCreateNestedOneWithoutChaptersInputObjectSchema),
  })
  .strict();

export const ChapterCreateInputObjectSchema = Schema;
