import { z } from 'zod';
import { StatsWhereInputObjectSchema } from './StatsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsRelationFilter> = z
  .object({
    is: z
      .lazy(() => StatsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StatsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StatsRelationFilterObjectSchema = Schema;
