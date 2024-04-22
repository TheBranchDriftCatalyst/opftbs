import { z } from 'zod';
import { StatsWhereInputObjectSchema } from './objects/StatsWhereInput.schema';
import { StatsOrderByWithAggregationInputObjectSchema } from './objects/StatsOrderByWithAggregationInput.schema';
import { StatsScalarWhereWithAggregatesInputObjectSchema } from './objects/StatsScalarWhereWithAggregatesInput.schema';
import { StatsScalarFieldEnumSchema } from './enums/StatsScalarFieldEnum.schema';

export const StatsGroupBySchema = z.object({
  where: StatsWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      StatsOrderByWithAggregationInputObjectSchema,
      StatsOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: StatsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(StatsScalarFieldEnumSchema),
});
