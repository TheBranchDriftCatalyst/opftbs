import { z } from 'zod';
import { StatsCountOutputTypeSelectObjectSchema } from './StatsCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => StatsCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const StatsCountOutputTypeArgsObjectSchema = Schema;
