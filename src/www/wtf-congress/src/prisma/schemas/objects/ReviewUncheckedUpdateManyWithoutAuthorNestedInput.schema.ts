import { z } from 'zod';
import { ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';
import { ReviewCreateOrConnectWithoutAuthorInputObjectSchema } from './ReviewCreateOrConnectWithoutAuthorInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutAuthorInput.schema';
import { ReviewCreateManyAuthorInputEnvelopeObjectSchema } from './ReviewCreateManyAuthorInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutAuthorInput.schema';
import { ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutAuthorInput.schema';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => ReviewCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReviewCreateManyAuthorInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
          ),
          z
            .lazy(
              () => ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema),
          z
            .lazy(() => ReviewUpdateManyWithWhereWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReviewScalarWhereInputObjectSchema),
          z.lazy(() => ReviewScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReviewUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema =
  Schema;
