import { z } from 'zod';
import { StoryCreateNestedOneWithoutTagsInputObjectSchema } from './StoryCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateWithoutTagInput> = z
  .object({
    story: z.lazy(() => StoryCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagsOnStoriesCreateWithoutTagInputObjectSchema = Schema;
