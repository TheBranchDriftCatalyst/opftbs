import { z } from 'zod';
import { StatsOrderByWithRelationInputObjectSchema } from './objects/StatsOrderByWithRelationInput.schema';
import { StatsWhereInputObjectSchema } from './objects/StatsWhereInput.schema';
import { StatsWhereUniqueInputObjectSchema } from './objects/StatsWhereUniqueInput.schema';
import { StatsCountAggregateInputObjectSchema } from './objects/StatsCountAggregateInput.schema';
import { StatsMinAggregateInputObjectSchema } from './objects/StatsMinAggregateInput.schema';
import { StatsMaxAggregateInputObjectSchema } from './objects/StatsMaxAggregateInput.schema';
import { StatsAvgAggregateInputObjectSchema } from './objects/StatsAvgAggregateInput.schema';
import { StatsSumAggregateInputObjectSchema } from './objects/StatsSumAggregateInput.schema';

export const StatsAggregateSchema = z.object({
  orderBy: z
    .union([
      StatsOrderByWithRelationInputObjectSchema,
      StatsOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: StatsWhereInputObjectSchema.optional(),
  cursor: StatsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), StatsCountAggregateInputObjectSchema])
    .optional(),
  _min: StatsMinAggregateInputObjectSchema.optional(),
  _max: StatsMaxAggregateInputObjectSchema.optional(),
  _avg: StatsAvgAggregateInputObjectSchema.optional(),
  _sum: StatsSumAggregateInputObjectSchema.optional(),
});
