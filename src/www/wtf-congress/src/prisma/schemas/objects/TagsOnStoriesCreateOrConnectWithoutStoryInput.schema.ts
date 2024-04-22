import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateOrConnectWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TagsOnStoriesCreateWithoutStoryInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnStoriesCreateOrConnectWithoutStoryInputObjectSchema = Schema;
