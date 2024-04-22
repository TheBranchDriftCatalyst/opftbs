import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithoutStoryInputObjectSchema } from './TagsOnStoriesUpdateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedUpdateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedUpdateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnStoriesUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInputObjectSchema =
  Schema;
