import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    uuid: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    summary: z.lazy(() => SortOrderSchema).optional(),
    authorId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    statsId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const StoryMinOrderByAggregateInputObjectSchema = Schema;
