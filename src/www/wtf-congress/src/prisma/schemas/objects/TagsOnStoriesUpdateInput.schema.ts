import { z } from 'zod';
import { TagUpdateOneRequiredWithoutStoriesNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutStoriesNestedInput.schema';
import { StoryUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateInput> = z
  .object({
    tag: z
      .lazy(() => TagUpdateOneRequiredWithoutStoriesNestedInputObjectSchema)
      .optional(),
    story: z
      .lazy(() => StoryUpdateOneRequiredWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnStoriesUpdateInputObjectSchema = Schema;
