import { z } from 'zod';
import { TagCreateNestedOneWithoutStoriesInputObjectSchema } from './TagCreateNestedOneWithoutStoriesInput.schema';
import { StoryCreateNestedOneWithoutTagsInputObjectSchema } from './StoryCreateNestedOneWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateInput> = z
  .object({
    tag: z.lazy(() => TagCreateNestedOneWithoutStoriesInputObjectSchema),
    story: z.lazy(() => StoryCreateNestedOneWithoutTagsInputObjectSchema),
  })
  .strict();

export const TagsOnStoriesCreateInputObjectSchema = Schema;
