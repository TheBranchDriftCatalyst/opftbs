import { z } from 'zod';
import { StatsUpdateManyMutationInputObjectSchema } from './objects/StatsUpdateManyMutationInput.schema';
import { StatsWhereInputObjectSchema } from './objects/StatsWhereInput.schema';

export const StatsUpdateManySchema = z.object({
  data: StatsUpdateManyMutationInputObjectSchema,
  where: StatsWhereInputObjectSchema.optional(),
});
