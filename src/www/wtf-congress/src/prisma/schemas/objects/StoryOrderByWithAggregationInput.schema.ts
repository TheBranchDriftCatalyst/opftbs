import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoryCountOrderByAggregateInputObjectSchema } from './StoryCountOrderByAggregateInput.schema';
import { StoryAvgOrderByAggregateInputObjectSchema } from './StoryAvgOrderByAggregateInput.schema';
import { StoryMaxOrderByAggregateInputObjectSchema } from './StoryMaxOrderByAggregateInput.schema';
import { StoryMinOrderByAggregateInputObjectSchema } from './StoryMinOrderByAggregateInput.schema';
import { StorySumOrderByAggregateInputObjectSchema } from './StorySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    summary: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    statsId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => StoryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => StoryAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => StoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => StoryMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => StorySumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const StoryOrderByWithAggregationInputObjectSchema = Schema;
