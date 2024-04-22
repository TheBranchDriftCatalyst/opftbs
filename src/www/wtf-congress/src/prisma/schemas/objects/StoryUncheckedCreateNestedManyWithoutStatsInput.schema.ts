import { z } from 'zod';
import { StoryCreateWithoutStatsInputObjectSchema } from './StoryCreateWithoutStatsInput.schema';
import { StoryUncheckedCreateWithoutStatsInputObjectSchema } from './StoryUncheckedCreateWithoutStatsInput.schema';
import { StoryCreateOrConnectWithoutStatsInputObjectSchema } from './StoryCreateOrConnectWithoutStatsInput.schema';
import { StoryCreateManyStatsInputEnvelopeObjectSchema } from './StoryCreateManyStatsInputEnvelope.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutStatsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutStatsInputObjectSchema),
          z.lazy(() => StoryCreateWithoutStatsInputObjectSchema).array(),
          z.lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema),
          z
            .lazy(() => StoryUncheckedCreateWithoutStatsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoryCreateOrConnectWithoutStatsInputObjectSchema),
          z
            .lazy(() => StoryCreateOrConnectWithoutStatsInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoryCreateManyStatsInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StoryUncheckedCreateNestedManyWithoutStatsInputObjectSchema =
  Schema;
