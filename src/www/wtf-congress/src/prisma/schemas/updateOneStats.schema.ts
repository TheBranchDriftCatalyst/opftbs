import { z } from 'zod';
import { StatsSelectObjectSchema } from './objects/StatsSelect.schema';
import { StatsIncludeObjectSchema } from './objects/StatsInclude.schema';
import { StatsUpdateInputObjectSchema } from './objects/StatsUpdateInput.schema';
import { StatsUncheckedUpdateInputObjectSchema } from './objects/StatsUncheckedUpdateInput.schema';
import { StatsWhereUniqueInputObjectSchema } from './objects/StatsWhereUniqueInput.schema';

export const StatsUpdateOneSchema = z.object({
  select: StatsSelectObjectSchema.optional(),
  include: StatsIncludeObjectSchema.optional(),
  data: z.union([
    StatsUpdateInputObjectSchema,
    StatsUncheckedUpdateInputObjectSchema,
  ]),
  where: StatsWhereUniqueInputObjectSchema,
});
