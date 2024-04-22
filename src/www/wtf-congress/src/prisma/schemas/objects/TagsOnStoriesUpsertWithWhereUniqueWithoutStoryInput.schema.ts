import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithoutStoryInputObjectSchema } from './TagsOnStoriesUpdateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedUpdateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedUpdateWithoutStoryInput.schema';
import { TagsOnStoriesCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagsOnStoriesUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagsOnStoriesCreateWithoutStoryInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInputObjectSchema =
  Schema;
