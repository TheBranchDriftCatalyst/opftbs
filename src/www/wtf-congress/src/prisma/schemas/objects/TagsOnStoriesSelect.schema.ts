import { z } from 'zod';
import { TagArgsObjectSchema } from './TagArgs.schema';
import { StoryArgsObjectSchema } from './StoryArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesSelect> = z
  .object({
    tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional(),
    tagId: z.boolean().optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    storyId: z.boolean().optional(),
  })
  .strict();

export const TagsOnStoriesSelectObjectSchema = Schema;
