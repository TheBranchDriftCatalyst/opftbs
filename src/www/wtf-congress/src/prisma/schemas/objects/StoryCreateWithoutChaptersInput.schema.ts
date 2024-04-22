import { z } from 'zod';
import { ReviewCreateNestedManyWithoutStoryInputObjectSchema } from './ReviewCreateNestedManyWithoutStoryInput.schema';
import { UserCreateNestedOneWithoutStoryInputObjectSchema } from './UserCreateNestedOneWithoutStoryInput.schema';
import { StatsCreateNestedOneWithoutStoryInputObjectSchema } from './StatsCreateNestedOneWithoutStoryInput.schema';
import { TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateNestedManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateWithoutChaptersInput> = z
  .object({
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    reviews: z
      .lazy(() => ReviewCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    author: z.lazy(() => UserCreateNestedOneWithoutStoryInputObjectSchema),
    stats: z
      .lazy(() => StatsCreateNestedOneWithoutStoryInputObjectSchema)
      .optional(),
    tags: z
      .lazy(() => TagsOnStoriesCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryCreateWithoutChaptersInputObjectSchema = Schema;
