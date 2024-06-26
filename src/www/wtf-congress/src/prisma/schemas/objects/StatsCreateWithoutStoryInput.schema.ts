import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCreateWithoutStoryInput> = z
  .object({
    views: z.number().optional().nullable(),
  })
  .strict();

export const StatsCreateWithoutStoryInputObjectSchema = Schema;
