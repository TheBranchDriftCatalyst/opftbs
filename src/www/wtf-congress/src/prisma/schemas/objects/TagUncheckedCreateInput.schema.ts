import { z } from 'zod';
import { TagsOnStoriesUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    stories: z
      .lazy(
        () => TagsOnStoriesUncheckedCreateNestedManyWithoutTagInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
