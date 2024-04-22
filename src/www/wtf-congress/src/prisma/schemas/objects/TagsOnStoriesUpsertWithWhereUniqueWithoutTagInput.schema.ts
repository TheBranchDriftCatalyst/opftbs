import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithoutTagInputObjectSchema } from './TagsOnStoriesUpdateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedUpdateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedUpdateWithoutTagInput.schema';
import { TagsOnStoriesCreateWithoutTagInputObjectSchema } from './TagsOnStoriesCreateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpsertWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagsOnStoriesUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagsOnStoriesCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnStoriesUpsertWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
