import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithoutStoryInput> = z
  .object({
    content: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    author: z
      .lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewUpdateWithoutStoryInputObjectSchema = Schema;
