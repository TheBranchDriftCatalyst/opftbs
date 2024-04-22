import { z } from 'zod';
import { ChapterUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateNestedManyWithoutStoryInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutStatsInput> = z
  .object({
    id: z.number().optional(),
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    authorId: z.number(),
    createdAt: z.coerce.date().optional(),
    chapters: z
      .lazy(() => ChapterUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    tags: z
      .lazy(
        () =>
          TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StoryUncheckedCreateWithoutStatsInputObjectSchema = Schema;
