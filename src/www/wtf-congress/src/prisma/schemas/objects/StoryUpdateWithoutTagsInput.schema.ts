import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChapterUpdateManyWithoutStoryNestedInputObjectSchema } from './ChapterUpdateManyWithoutStoryNestedInput.schema';
import { ReviewUpdateManyWithoutStoryNestedInputObjectSchema } from './ReviewUpdateManyWithoutStoryNestedInput.schema';
import { UserUpdateOneRequiredWithoutStoryNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutStoryNestedInput.schema';
import { StatsUpdateOneWithoutStoryNestedInputObjectSchema } from './StatsUpdateOneWithoutStoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateWithoutTagsInput> = z
  .object({
    uuid: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    summary: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    chapters: z
      .lazy(() => ChapterUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    author: z
      .lazy(() => UserUpdateOneRequiredWithoutStoryNestedInputObjectSchema)
      .optional(),
    stats: z
      .lazy(() => StatsUpdateOneWithoutStoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryUpdateWithoutTagsInputObjectSchema = Schema;
