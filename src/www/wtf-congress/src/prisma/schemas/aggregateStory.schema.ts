import { z } from 'zod';
import { StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema';
import { StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryCountAggregateInputObjectSchema } from './objects/StoryCountAggregateInput.schema';
import { StoryMinAggregateInputObjectSchema } from './objects/StoryMinAggregateInput.schema';
import { StoryMaxAggregateInputObjectSchema } from './objects/StoryMaxAggregateInput.schema';
import { StoryAvgAggregateInputObjectSchema } from './objects/StoryAvgAggregateInput.schema';
import { StorySumAggregateInputObjectSchema } from './objects/StorySumAggregateInput.schema';

export const StoryAggregateSchema = z.object({
  orderBy: z
    .union([
      StoryOrderByWithRelationInputObjectSchema,
      StoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StoryWhereInputObjectSchema.optional(),
  cursor: StoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StoryCountAggregateInputObjectSchema])
    .optional(),
  _min: StoryMinAggregateInputObjectSchema.optional(),
  _max: StoryMaxAggregateInputObjectSchema.optional(),
  _avg: StoryAvgAggregateInputObjectSchema.optional(),
  _sum: StorySumAggregateInputObjectSchema.optional(),
});
