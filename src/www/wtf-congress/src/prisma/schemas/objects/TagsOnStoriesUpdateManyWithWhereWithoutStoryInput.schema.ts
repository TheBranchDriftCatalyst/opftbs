import { z } from 'zod';
import { TagsOnStoriesScalarWhereInputObjectSchema } from './TagsOnStoriesScalarWhereInput.schema';
import { TagsOnStoriesUpdateManyMutationInputObjectSchema } from './TagsOnStoriesUpdateManyMutationInput.schema';
import { TagsOnStoriesUncheckedUpdateManyWithoutTagsInputObjectSchema } from './TagsOnStoriesUncheckedUpdateManyWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateManyWithWhereWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TagsOnStoriesUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TagsOnStoriesUncheckedUpdateManyWithoutTagsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TagsOnStoriesUpdateManyWithWhereWithoutStoryInputObjectSchema =
  Schema;
