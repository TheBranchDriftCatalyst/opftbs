import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithoutTagInputObjectSchema } from './TagsOnStoriesUpdateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedUpdateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateWithWhereUniqueWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnStoriesUpdateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnStoriesUncheckedUpdateWithoutTagInputObjectSchema),
      ]),
    })
    .strict();

export const TagsOnStoriesUpdateWithWhereUniqueWithoutTagInputObjectSchema =
  Schema;
