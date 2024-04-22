import { z } from 'zod';
import { StatsSelectObjectSchema } from './StatsSelect.schema';
import { StatsIncludeObjectSchema } from './StatsInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsArgs> = z
  .object({
    select: z.lazy(() => StatsSelectObjectSchema).optional(),
    include: z.lazy(() => StatsIncludeObjectSchema).optional(),
  })
  .strict();

export const StatsArgsObjectSchema = Schema;
