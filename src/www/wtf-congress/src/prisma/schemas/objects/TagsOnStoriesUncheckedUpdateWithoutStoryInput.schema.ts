import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedUpdateWithoutStoryInput> =
  z
    .object({
      tagId: z
        .union([
          z.number(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TagsOnStoriesUncheckedUpdateWithoutStoryInputObjectSchema = Schema;
