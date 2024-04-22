import { z } from 'zod';
import { StatsUpdateWithoutStoryInputObjectSchema } from './StatsUpdateWithoutStoryInput.schema';
import { StatsUncheckedUpdateWithoutStoryInputObjectSchema } from './StatsUncheckedUpdateWithoutStoryInput.schema';
import { StatsCreateWithoutStoryInputObjectSchema } from './StatsCreateWithoutStoryInput.schema';
import { StatsUncheckedCreateWithoutStoryInputObjectSchema } from './StatsUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUpsertWithoutStoryInput> = z
  .object({
    update: z.union([
      z.lazy(() => StatsUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => StatsUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StatsCreateWithoutStoryInputObjectSchema),
      z.lazy(() => StatsUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const StatsUpsertWithoutStoryInputObjectSchema = Schema;
