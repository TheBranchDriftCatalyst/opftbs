import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChapterOrderByRelationAggregateInputObjectSchema } from './ChapterOrderByRelationAggregateInput.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { StatsOrderByWithRelationInputObjectSchema } from './StatsOrderByWithRelationInput.schema';
import { TagsOnStoriesOrderByRelationAggregateInputObjectSchema } from './TagsOnStoriesOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryOrderByWithRelationInput> = z
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
    chapters: z
      .lazy(() => ChapterOrderByRelationAggregateInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewOrderByRelationAggregateInputObjectSchema)
      .optional(),
    author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    stats: z.lazy(() => StatsOrderByWithRelationInputObjectSchema).optional(),
    tags: z
      .lazy(() => TagsOnStoriesOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const StoryOrderByWithRelationInputObjectSchema = Schema;
