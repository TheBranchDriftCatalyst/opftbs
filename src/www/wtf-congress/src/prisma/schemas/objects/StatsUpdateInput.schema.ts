import { z } from 'zod';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StoryUpdateManyWithoutStatsNestedInputObjectSchema } from './StoryUpdateManyWithoutStatsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUpdateInput> = z
  .object({
    views: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Story: z
      .lazy(() => StoryUpdateManyWithoutStatsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatsUpdateInputObjectSchema = Schema;
