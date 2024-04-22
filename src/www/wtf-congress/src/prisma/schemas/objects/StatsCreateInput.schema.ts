import { z } from 'zod';
import { StoryCreateNestedManyWithoutStatsInputObjectSchema } from './StoryCreateNestedManyWithoutStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCreateInput> = z
  .object({
    views: z.number().optional().nullable(),
    Story: z
      .lazy(() => StoryCreateNestedManyWithoutStatsInputObjectSchema)
      .optional(),
  })
  .strict();

export const StatsCreateInputObjectSchema = Schema;
