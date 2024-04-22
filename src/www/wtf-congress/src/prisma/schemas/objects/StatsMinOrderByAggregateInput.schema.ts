import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    views: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StatsMinOrderByAggregateInputObjectSchema = Schema;
