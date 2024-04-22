import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesAvgOrderByAggregateInput> = z
  .object({
    tagId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TagsOnStoriesAvgOrderByAggregateInputObjectSchema = Schema;
