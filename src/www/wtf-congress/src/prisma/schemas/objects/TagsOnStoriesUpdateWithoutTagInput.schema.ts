import { z } from 'zod';
import { StoryUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutTagsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateWithoutTagInput> = z
  .object({
    story: z
      .lazy(() => StoryUpdateOneRequiredWithoutTagsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnStoriesUpdateWithoutTagInputObjectSchema = Schema;
