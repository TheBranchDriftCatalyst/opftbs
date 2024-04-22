import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutStatsInputObjectSchema } from './StoryUpdateWithoutStatsInput.schema';
import { StoryUncheckedUpdateWithoutStatsInputObjectSchema } from './StoryUncheckedUpdateWithoutStatsInput.schema';
import { StoryCreateWithoutStatsInputObjectSchema } from './StoryCreateWithoutStatsInput.schema';
import { StoryUncheckedCreateWithoutStatsInputObjectSchema } from './StoryUncheckedCreateWithoutStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpsertWithWhereUniqueWithoutStatsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => StoryUpdateWithoutStatsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutStatsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutStatsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpsertWithWhereUniqueWithoutStatsInputObjectSchema = Schema;
