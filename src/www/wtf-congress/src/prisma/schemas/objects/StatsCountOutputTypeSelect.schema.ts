import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCountOutputTypeSelect> = z
  .object({
    Story: z.boolean().optional(),
  })
  .strict();

export const StatsCountOutputTypeSelectObjectSchema = Schema;
