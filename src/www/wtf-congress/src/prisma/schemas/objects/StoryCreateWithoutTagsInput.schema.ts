import { z } from 'zod';
import { ChapterCreateNestedManyWithoutStoryInputObjectSchema } from './ChapterCreateNestedManyWithoutStoryInput.schema';
import { ReviewCreateNestedManyWithoutStoryInputObjectSchema } from './ReviewCreateNestedManyWithoutStoryInput.schema';
import { UserCreateNestedOneWithoutStoryInputObjectSchema } from './UserCreateNestedOneWithoutStoryInput.schema';
import { StatsCreateNestedOneWithoutStoryInputObjectSchema } from './StatsCreateNestedOneWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateWithoutTagsInput> = z
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
    stats: z
      .lazy(() => StatsCreateNestedOneWithoutStoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryCreateWithoutTagsInputObjectSchema = Schema;
