import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterAvgOrderByAggregateInput> = z
  .object({
    index: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ChapterAvgOrderByAggregateInputObjectSchema = Schema;
