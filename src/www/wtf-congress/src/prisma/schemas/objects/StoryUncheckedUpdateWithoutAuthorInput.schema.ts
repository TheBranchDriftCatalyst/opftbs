import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ChapterUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from './ChapterUncheckedUpdateManyWithoutStoryNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutStoryNestedInput.schema';
import { TagsOnStoriesUncheckedUpdateManyWithoutStoryNestedInputObjectSchema } from './TagsOnStoriesUncheckedUpdateManyWithoutStoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUncheckedUpdateWithoutAuthorInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    statsId: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    chapters: z
      .lazy(() => ChapterUncheckedUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewUncheckedUpdateManyWithoutStoryNestedInputObjectSchema)
      .optional(),
    tags: z
      .lazy(
        () =>
          TagsOnStoriesUncheckedUpdateManyWithoutStoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const StoryUncheckedUpdateWithoutAuthorInputObjectSchema = Schema;
