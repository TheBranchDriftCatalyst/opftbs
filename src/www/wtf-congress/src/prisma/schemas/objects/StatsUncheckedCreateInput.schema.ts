import { z } from 'zod';
import { StoryUncheckedCreateNestedManyWithoutStatsInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    views: z.number().optional().nullable(),
    Story: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutStatsInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatsUncheckedCreateInputObjectSchema = Schema;
