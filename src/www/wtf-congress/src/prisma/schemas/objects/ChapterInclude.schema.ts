import { z } from 'zod';
import { StoryArgsObjectSchema } from './StoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterInclude> = z
  .object({
    Story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ChapterIncludeObjectSchema = Schema;
