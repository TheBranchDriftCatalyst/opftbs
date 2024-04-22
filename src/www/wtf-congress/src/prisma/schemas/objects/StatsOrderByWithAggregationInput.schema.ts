import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StatsCountOrderByAggregateInputObjectSchema } from './StatsCountOrderByAggregateInput.schema';
import { StatsAvgOrderByAggregateInputObjectSchema } from './StatsAvgOrderByAggregateInput.schema';
import { StatsMaxOrderByAggregateInputObjectSchema } from './StatsMaxOrderByAggregateInput.schema';
import { StatsMinOrderByAggregateInputObjectSchema } from './StatsMinOrderByAggregateInput.schema';
import { StatsSumOrderByAggregateInputObjectSchema } from './StatsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    views: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => StatsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => StatsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => StatsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => StatsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => StatsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const StatsOrderByWithAggregationInputObjectSchema = Schema;
