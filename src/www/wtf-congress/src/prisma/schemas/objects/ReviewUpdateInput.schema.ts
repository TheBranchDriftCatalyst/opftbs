import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { StoryUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './StoryUpdateOneRequiredWithoutReviewsNestedInput.schema';
import { UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateInput> = z
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
    author: z
      .lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewUpdateInputObjectSchema = Schema;
