import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChapterCountOrderByAggregateInputObjectSchema } from './ChapterCountOrderByAggregateInput.schema';
import { ChapterAvgOrderByAggregateInputObjectSchema } from './ChapterAvgOrderByAggregateInput.schema';
import { ChapterMaxOrderByAggregateInputObjectSchema } from './ChapterMaxOrderByAggregateInput.schema';
import { ChapterMinOrderByAggregateInputObjectSchema } from './ChapterMinOrderByAggregateInput.schema';
import { ChapterSumOrderByAggregateInputObjectSchema } from './ChapterSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterOrderByWithAggregationInput> = z
  .object({
    index: z.lazy(() => SortOrderSchema).optional(),
    title: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ChapterCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ChapterAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ChapterMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ChapterMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ChapterSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ChapterOrderByWithAggregationInputObjectSchema = Schema;
