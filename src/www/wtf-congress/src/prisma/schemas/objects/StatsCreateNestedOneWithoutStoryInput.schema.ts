import { z } from 'zod';
import { StatsCreateWithoutStoryInputObjectSchema } from './StatsCreateWithoutStoryInput.schema';
import { StatsUncheckedCreateWithoutStoryInputObjectSchema } from './StatsUncheckedCreateWithoutStoryInput.schema';
import { StatsCreateOrConnectWithoutStoryInputObjectSchema } from './StatsCreateOrConnectWithoutStoryInput.schema';
import { StatsWhereUniqueInputObjectSchema } from './StatsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsCreateNestedOneWithoutStoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StatsCreateWithoutStoryInputObjectSchema),
        z.lazy(() => StatsUncheckedCreateWithoutStoryInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StatsCreateOrConnectWithoutStoryInputObjectSchema)
      .optional(),
    connect: z.lazy(() => StatsWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StatsCreateNestedOneWithoutStoryInputObjectSchema = Schema;
