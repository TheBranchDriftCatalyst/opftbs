import { z } from 'zod';
import { StatsWhereUniqueInputObjectSchema } from './StatsWhereUniqueInput.schema';
import { StatsCreateWithoutStoryInputObjectSchema } from './StatsCreateWithoutStoryInput.schema';
import { StatsUncheckedCreateWithoutStoryInputObjectSchema } from './StatsUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => StatsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StatsCreateWithoutStoryInputObjectSchema),
      z.lazy(() => StatsUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const StatsCreateOrConnectWithoutStoryInputObjectSchema = Schema;
