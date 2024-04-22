import { z } from 'zod';
import { ChapterCreateNestedManyWithoutStoryInputObjectSchema } from './ChapterCreateNestedManyWithoutStoryInput.schema';
import { ReviewCreateNestedManyWithoutStoryInputObjectSchema } from './ReviewCreateNestedManyWithoutStoryInput.schema';
import { StatsCreateNestedOneWithoutStoryInputObjectSchema } from './StatsCreateNestedOneWithoutStoryInput.schema';
import { TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateNestedManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateWithoutAuthorInput> = z
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
    stats: z
      .lazy(() => StatsCreateNestedOneWithoutStoryInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryCreateWithoutAuthorInputObjectSchema = Schema;
