import { z } from 'zod';
import { ChapterUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateNestedManyWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUncheckedCreateWithoutReviewsInput> = z
  .object({
    id: z.number().optional(),
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    authorId: z.number(),
    createdAt: z.coerce.date().optional(),
    statsId: z.number().optional().nullable(),
    chapters: z
      .lazy(() => ChapterUncheckedCreateNestedManyWithoutStoryInputObjectSchema)
      .optional(),
    tags: z
      .lazy(
        () =>
          TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StoryUncheckedCreateWithoutReviewsInputObjectSchema = Schema;
