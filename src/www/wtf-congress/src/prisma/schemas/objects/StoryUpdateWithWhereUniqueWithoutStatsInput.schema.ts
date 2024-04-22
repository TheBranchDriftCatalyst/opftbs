import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutStatsInputObjectSchema } from './StoryUpdateWithoutStatsInput.schema';
import { StoryUncheckedUpdateWithoutStatsInputObjectSchema } from './StoryUncheckedUpdateWithoutStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateWithWhereUniqueWithoutStatsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateWithoutStatsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutStatsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpdateWithWhereUniqueWithoutStatsInputObjectSchema = Schema;
