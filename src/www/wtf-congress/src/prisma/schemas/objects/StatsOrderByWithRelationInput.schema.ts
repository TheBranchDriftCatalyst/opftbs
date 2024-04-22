import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoryOrderByRelationAggregateInputObjectSchema } from './StoryOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    views: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    Story: z
      .lazy(() => StoryOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatsOrderByWithRelationInputObjectSchema = Schema;
