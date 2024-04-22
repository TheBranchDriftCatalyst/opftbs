import { z } from 'zod';
import { StatsWhereInputObjectSchema } from './objects/StatsWhereInput.schema';

export const StatsDeleteManySchema = z.object({
  where: StatsWhereInputObjectSchema.optional(),
});
