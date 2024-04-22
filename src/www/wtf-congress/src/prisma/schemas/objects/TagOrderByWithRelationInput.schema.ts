import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagsOnStoriesOrderByRelationAggregateInputObjectSchema } from './TagsOnStoriesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    stories: z
      .lazy(() => TagsOnStoriesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
