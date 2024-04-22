import { z } from 'zod';
import { StoryCreateWithoutStatsInputObjectSchema } from './StoryCreateWithoutStatsInput.schema';
import { StoryUncheckedCreateWithoutStatsInputObjectSchema } from './StoryUncheckedCreateWithoutStatsInput.schema';
import { StoryCreateOrConnectWithoutStatsInputObjectSchema } from './StoryCreateOrConnectWithoutStatsInput.schema';
import { StoryUpsertWithWhereUniqueWithoutStatsInputObjectSchema } from './StoryUpsertWithWhereUniqueWithoutStatsInput.schema';
import { StoryCreateManyStatsInputEnvelopeObjectSchema } from './StoryCreateManyStatsInputEnvelope.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithWhereUniqueWithoutStatsInputObjectSchema } from './StoryUpdateWithWhereUniqueWithoutStatsInput.schema';
import { StoryUpdateManyWithWhereWithoutStatsInputObjectSchema } from './StoryUpdateManyWithWhereWithoutStatsInput.schema';
import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateManyWithoutStatsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutStatsInputObjectSchema),
        z.lazy(() => StoryCreateWithoutStatsInputObjectSchema).array(),
        z.lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => StoryCreateOrConnectWithoutStatsInputObjectSchema),
        z.lazy(() => StoryCreateOrConnectWithoutStatsInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => StoryUpsertWithWhereUniqueWithoutStatsInputObjectSchema),
        z
          .lazy(() => StoryUpsertWithWhereUniqueWithoutStatsInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => StoryCreateManyStatsInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => StoryWhereUniqueInputObjectSchema),
        z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => StoryWhereUniqueInputObjectSchema),
        z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => StoryWhereUniqueInputObjectSchema),
        z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => StoryWhereUniqueInputObjectSchema),
        z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => StoryUpdateWithWhereUniqueWithoutStatsInputObjectSchema),
        z
          .lazy(() => StoryUpdateWithWhereUniqueWithoutStatsInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => StoryUpdateManyWithWhereWithoutStatsInputObjectSchema),
        z
          .lazy(() => StoryUpdateManyWithWhereWithoutStatsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => StoryScalarWhereInputObjectSchema),
        z.lazy(() => StoryScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const StoryUpdateManyWithoutStatsNestedInputObjectSchema = Schema;
