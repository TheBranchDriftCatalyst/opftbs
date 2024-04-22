import { z } from 'zod';
import { ChapterCreateWithoutStoryInputObjectSchema } from './ChapterCreateWithoutStoryInput.schema';
import { ChapterUncheckedCreateWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateWithoutStoryInput.schema';
import { ChapterCreateOrConnectWithoutStoryInputObjectSchema } from './ChapterCreateOrConnectWithoutStoryInput.schema';
import { ChapterCreateManyStoryInputEnvelopeObjectSchema } from './ChapterCreateManyStoryInputEnvelope.schema';
import { ChapterWhereUniqueInputObjectSchema } from './ChapterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUncheckedCreateNestedManyWithoutStoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ChapterCreateWithoutStoryInputObjectSchema),
          z.lazy(() => ChapterCreateWithoutStoryInputObjectSchema).array(),
          z.lazy(() => ChapterUncheckedCreateWithoutStoryInputObjectSchema),
          z
            .lazy(() => ChapterUncheckedCreateWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ChapterCreateOrConnectWithoutStoryInputObjectSchema),
          z
            .lazy(() => ChapterCreateOrConnectWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ChapterCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChapterWhereUniqueInputObjectSchema),
          z.lazy(() => ChapterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChapterUncheckedCreateNestedManyWithoutStoryInputObjectSchema =
  Schema;
