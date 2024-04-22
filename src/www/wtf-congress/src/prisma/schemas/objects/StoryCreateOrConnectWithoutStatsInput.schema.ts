import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutStatsInputObjectSchema } from './StoryCreateWithoutStatsInput.schema';
import { StoryUncheckedCreateWithoutStatsInputObjectSchema } from './StoryUncheckedCreateWithoutStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutStatsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutStatsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryCreateOrConnectWithoutStatsInputObjectSchema = Schema;
