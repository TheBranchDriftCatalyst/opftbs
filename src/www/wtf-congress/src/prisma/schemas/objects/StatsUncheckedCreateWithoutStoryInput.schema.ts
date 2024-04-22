import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUncheckedCreateWithoutStoryInput> = z
  .object({
    id: z.number().optional(),
    views: z.number().optional().nullable(),
  })
  .strict();

export const StatsUncheckedCreateWithoutStoryInputObjectSchema = Schema;
