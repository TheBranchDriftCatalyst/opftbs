import { z } from 'zod';
import { StoryArgsObjectSchema } from './StoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterSelect> = z
  .object({
    index: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    storyId: z.boolean().optional(),
    Story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ChapterSelectObjectSchema = Schema;
