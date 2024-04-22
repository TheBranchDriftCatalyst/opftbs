import { z } from 'zod';
import { StatsSelectObjectSchema } from './objects/StatsSelect.schema';
import { StatsIncludeObjectSchema } from './objects/StatsInclude.schema';
import { StatsWhereUniqueInputObjectSchema } from './objects/StatsWhereUniqueInput.schema';
import { StatsCreateInputObjectSchema } from './objects/StatsCreateInput.schema';
import { StatsUncheckedCreateInputObjectSchema } from './objects/StatsUncheckedCreateInput.schema';
import { StatsUpdateInputObjectSchema } from './objects/StatsUpdateInput.schema';
import { StatsUncheckedUpdateInputObjectSchema } from './objects/StatsUncheckedUpdateInput.schema';

export const StatsUpsertSchema = z.object({
  select: StatsSelectObjectSchema.optional(),
  include: StatsIncludeObjectSchema.optional(),
  where: StatsWhereUniqueInputObjectSchema,
  create: z.union([
    StatsCreateInputObjectSchema,
    StatsUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    StatsUpdateInputObjectSchema,
    StatsUncheckedUpdateInputObjectSchema,
  ]),
});
