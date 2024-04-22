import { z } from 'zod';
import { StatsCreateWithoutStoryInputObjectSchema } from './StatsCreateWithoutStoryInput.schema';
import { StatsUncheckedCreateWithoutStoryInputObjectSchema } from './StatsUncheckedCreateWithoutStoryInput.schema';
import { StatsCreateOrConnectWithoutStoryInputObjectSchema } from './StatsCreateOrConnectWithoutStoryInput.schema';
import { StatsUpsertWithoutStoryInputObjectSchema } from './StatsUpsertWithoutStoryInput.schema';
import { StatsWhereUniqueInputObjectSchema } from './StatsWhereUniqueInput.schema';
import { StatsUpdateWithoutStoryInputObjectSchema } from './StatsUpdateWithoutStoryInput.schema';
import { StatsUncheckedUpdateWithoutStoryInputObjectSchema } from './StatsUncheckedUpdateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsUpdateOneWithoutStoryNestedInput> = z
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
    upsert: z.lazy(() => StatsUpsertWithoutStoryInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => StatsWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => StatsUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => StatsUncheckedUpdateWithoutStoryInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StatsUpdateOneWithoutStoryNestedInputObjectSchema = Schema;
