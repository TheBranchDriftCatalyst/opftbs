import { z } from 'zod';
import { StatsSelectObjectSchema } from './objects/StatsSelect.schema';
import { StatsIncludeObjectSchema } from './objects/StatsInclude.schema';
import { StatsWhereUniqueInputObjectSchema } from './objects/StatsWhereUniqueInput.schema';

export const StatsFindUniqueSchema = z.object({
  select: StatsSelectObjectSchema.optional(),
  include: StatsIncludeObjectSchema.optional(),
  where: StatsWhereUniqueInputObjectSchema,
});
