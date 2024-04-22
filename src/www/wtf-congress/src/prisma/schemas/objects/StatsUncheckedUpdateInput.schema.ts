import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StoryUncheckedUpdateManyWithoutStatsNestedInputObjectSchema } from './StoryUncheckedUpdateManyWithoutStatsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    views: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Story: z
      .lazy(() => StoryUncheckedUpdateManyWithoutStatsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatsUncheckedUpdateInputObjectSchema = Schema;
