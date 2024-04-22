import { z } from 'zod';
import { ChapterCreateWithoutStoryInputObjectSchema } from './ChapterCreateWithoutStoryInput.schema';
import { ChapterUncheckedCreateWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateWithoutStoryInput.schema';
import { ChapterCreateOrConnectWithoutStoryInputObjectSchema } from './ChapterCreateOrConnectWithoutStoryInput.schema';
import { ChapterUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './ChapterUpsertWithWhereUniqueWithoutStoryInput.schema';
import { ChapterCreateManyStoryInputEnvelopeObjectSchema } from './ChapterCreateManyStoryInputEnvelope.schema';
import { ChapterWhereUniqueInputObjectSchema } from './ChapterWhereUniqueInput.schema';
import { ChapterUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './ChapterUpdateWithWhereUniqueWithoutStoryInput.schema';
import { ChapterUpdateManyWithWhereWithoutStoryInputObjectSchema } from './ChapterUpdateManyWithWhereWithoutStoryInput.schema';
import { ChapterScalarWhereInputObjectSchema } from './ChapterScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUncheckedUpdateManyWithoutStoryNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => ChapterUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ChapterUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ChapterCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ChapterWhereUniqueInputObjectSchema),
          z.lazy(() => ChapterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ChapterWhereUniqueInputObjectSchema),
          z.lazy(() => ChapterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ChapterWhereUniqueInputObjectSchema),
          z.lazy(() => ChapterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ChapterWhereUniqueInputObjectSchema),
          z.lazy(() => ChapterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ChapterUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () => ChapterUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ChapterUpdateManyWithWhereWithoutStoryInputObjectSchema),
          z
            .lazy(() => ChapterUpdateManyWithWhereWithoutStoryInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ChapterScalarWhereInputObjectSchema),
          z.lazy(() => ChapterScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ChapterUncheckedUpdateManyWithoutStoryNestedInputObjectSchema =
  Schema;
