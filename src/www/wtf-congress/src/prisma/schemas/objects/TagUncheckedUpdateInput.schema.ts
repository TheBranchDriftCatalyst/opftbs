import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TagsOnStoriesUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './TagsOnStoriesUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    stories: z
      .lazy(
        () => TagsOnStoriesUncheckedUpdateManyWithoutTagNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
