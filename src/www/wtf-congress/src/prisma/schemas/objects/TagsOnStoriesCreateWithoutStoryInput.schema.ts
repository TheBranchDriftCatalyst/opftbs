import { z } from 'zod';
import { TagCreateNestedOneWithoutStoriesInputObjectSchema } from './TagCreateNestedOneWithoutStoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateWithoutStoryInput> = z
  .object({
    tag: z.lazy(() => TagCreateNestedOneWithoutStoriesInputObjectSchema),
  })
  .strict();

export const TagsOnStoriesCreateWithoutStoryInputObjectSchema = Schema;
