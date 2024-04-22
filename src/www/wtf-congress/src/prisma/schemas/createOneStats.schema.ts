import { z } from 'zod';
import { StatsSelectObjectSchema } from './objects/StatsSelect.schema';
import { StatsIncludeObjectSchema } from './objects/StatsInclude.schema';
import { StatsCreateInputObjectSchema } from './objects/StatsCreateInput.schema';
import { StatsUncheckedCreateInputObjectSchema } from './objects/StatsUncheckedCreateInput.schema';

export const StatsCreateOneSchema = z.object({
  select: StatsSelectObjectSchema.optional(),
  include: StatsIncludeObjectSchema.optional(),
  data: z.union([
    StatsCreateInputObjectSchema,
    StatsUncheckedCreateInputObjectSchema,
  ]),
});
