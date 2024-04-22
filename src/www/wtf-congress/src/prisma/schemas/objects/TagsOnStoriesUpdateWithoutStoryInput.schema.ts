import { z } from 'zod';
import { TagUpdateOneRequiredWithoutStoriesNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutStoriesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateWithoutStoryInput> = z
  .object({
    tag: z
      .lazy(() => TagUpdateOneRequiredWithoutStoriesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnStoriesUpdateWithoutStoryInputObjectSchema = Schema;
