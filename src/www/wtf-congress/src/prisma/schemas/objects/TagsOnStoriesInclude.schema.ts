import { z } from 'zod';
import { TagArgsObjectSchema } from './TagArgs.schema';
import { StoryArgsObjectSchema } from './StoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesInclude> = z
  .object({
    tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const TagsOnStoriesIncludeObjectSchema = Schema;
