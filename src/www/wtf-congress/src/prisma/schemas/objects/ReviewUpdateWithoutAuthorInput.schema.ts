import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StoryUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutReviewsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithoutAuthorInput> = z
  .object({
    content: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Story: z
      .lazy(() => StoryUpdateOneRequiredWithoutReviewsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewUpdateWithoutAuthorInputObjectSchema = Schema;
