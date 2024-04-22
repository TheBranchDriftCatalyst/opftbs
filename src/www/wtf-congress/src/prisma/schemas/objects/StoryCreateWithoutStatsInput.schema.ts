import { z } from 'zod';
import { ChapterCreateNestedManyWithoutStoryInputObjectSchema } from './ChapterCreateNestedManyWithoutStoryInput.schema';
import { ReviewCreateNestedManyWithoutStoryInputObjectSchema } from './ReviewCreateNestedManyWithoutStoryInput.schema';
import { UserCreateNestedOneWithoutStoryInputObjectSchema } from './UserCreateNestedOneWithoutStoryInput.schema';
import { TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateNestedManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateWithoutStatsInput> = z
  .object({
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    chapters: z
      .lazy(() => ChapterCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    author: z.lazy(() => UserCreateNestedOneWithoutStoryInputObjectSchema),
    tags: z
      .lazy(() => TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryCreateWithoutStatsInputObjectSchema = Schema;
