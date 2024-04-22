import { z } from 'zod';
import { TagsOnStoriesScalarWhereInputObjectSchema } from './TagsOnStoriesScalarWhereInput.schema';
import { TagsOnStoriesUpdateManyMutationInputObjectSchema } from './TagsOnStoriesUpdateManyMutationInput.schema';
import { TagsOnStoriesUncheckedUpdateManyWithoutStoriesInputObjectSchema } from './TagsOnStoriesUncheckedUpdateManyWithoutStoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateManyWithWhereWithoutTagInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnStoriesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TagsOnStoriesUncheckedUpdateManyWithoutStoriesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagsOnStoriesUpdateManyWithWhereWithoutTagInputObjectSchema =
  Schema;
