import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsOnStoriesCountOrderByAggregateInputObjectSchema } from './TagsOnStoriesCountOrderByAggregateInput.schema';
import { TagsOnStoriesAvgOrderByAggregateInputObjectSchema } from './TagsOnStoriesAvgOrderByAggregateInput.schema';
import { TagsOnStoriesMaxOrderByAggregateInputObjectSchema } from './TagsOnStoriesMaxOrderByAggregateInput.schema';
import { TagsOnStoriesMinOrderByAggregateInputObjectSchema } from './TagsOnStoriesMinOrderByAggregateInput.schema';
import { TagsOnStoriesSumOrderByAggregateInputObjectSchema } from './TagsOnStoriesSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesOrderByWithAggregationInput> = z
  .object({
    tagId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TagsOnStoriesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => TagsOnStoriesAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => TagsOnStoriesMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => TagsOnStoriesMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => TagsOnStoriesSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnStoriesOrderByWithAggregationInputObjectSchema = Schema;
