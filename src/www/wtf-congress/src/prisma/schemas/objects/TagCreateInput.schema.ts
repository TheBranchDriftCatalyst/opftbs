import { z } from 'zod';
import { TagsOnStoriesCreateNestedManyWithoutTagInputObjectSchema } from './TagsOnStoriesCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    name: z.string(),
    stories: z
      .lazy(() => TagsOnStoriesCreateNestedManyWithoutTagInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
