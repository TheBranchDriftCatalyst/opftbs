import { z } from 'zod';
import { StatsCreateManyInputObjectSchema } from './objects/StatsCreateManyInput.schema';

export const StatsCreateManySchema = z.object({
  data: z.union([
    StatsCreateManyInputObjectSchema,
    z.array(StatsCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
