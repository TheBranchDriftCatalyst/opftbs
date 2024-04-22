import { z } from 'zod';
import { TagsOnStoriesOrderByWithRelationInputObjectSchema } from './objects/TagsOnStoriesOrderByWithRelationInput.schema';
import { TagsOnStoriesWhereInputObjectSchema } from './objects/TagsOnStoriesWhereInput.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './objects/TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesCountAggregateInputObjectSchema } from './objects/TagsOnStoriesCountAggregateInput.schema';
import { TagsOnStoriesMinAggregateInputObjectSchema } from './objects/TagsOnStoriesMinAggregateInput.schema';
import { TagsOnStoriesMaxAggregateInputObjectSchema } from './objects/TagsOnStoriesMaxAggregateInput.schema';
import { TagsOnStoriesAvgAggregateInputObjectSchema } from './objects/TagsOnStoriesAvgAggregateInput.schema';
import { TagsOnStoriesSumAggregateInputObjectSchema } from './objects/TagsOnStoriesSumAggregateInput.schema';

export const TagsOnStoriesAggregateSchema = z.object({
  orderBy: z
    .union([
      TagsOnStoriesOrderByWithRelationInputObjectSchema,
      TagsOnStoriesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TagsOnStoriesWhereInputObjectSchema.optional(),
  cursor: TagsOnStoriesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TagsOnStoriesCountAggregateInputObjectSchema])
    .optional(),
  _min: TagsOnStoriesMinAggregateInputObjectSchema.optional(),
  _max: TagsOnStoriesMaxAggregateInputObjectSchema.optional(),
  _avg: TagsOnStoriesAvgAggregateInputObjectSchema.optional(),
  _sum: TagsOnStoriesSumAggregateInputObjectSchema.optional(),
});
