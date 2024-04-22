import { z } from 'zod';
import { StatsSelectObjectSchema } from './objects/StatsSelect.schema';
import { StatsIncludeObjectSchema } from './objects/StatsInclude.schema';
import { StatsOrderByWithRelationInputObjectSchema } from './objects/StatsOrderByWithRelationInput.schema';
import { StatsWhereInputObjectSchema } from './objects/StatsWhereInput.schema';
import { StatsWhereUniqueInputObjectSchema } from './objects/StatsWhereUniqueInput.schema';
import { StatsScalarFieldEnumSchema } from './enums/StatsScalarFieldEnum.schema';

export const StatsFindFirstSchema = z.object({
  select: StatsSelectObjectSchema.optional(),
  include: StatsIncludeObjectSchema.optional(),
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
  distinct: z.array(StatsScalarFieldEnumSchema).optional(),
});
