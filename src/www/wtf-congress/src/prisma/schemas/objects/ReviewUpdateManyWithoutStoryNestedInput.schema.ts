import { z } from 'zod';
import { ReviewCreateWithoutStoryInputObjectSchema } from './ReviewCreateWithoutStoryInput.schema';
import { ReviewUncheckedCreateWithoutStoryInputObjectSchema } from './ReviewUncheckedCreateWithoutStoryInput.schema';
import { ReviewCreateOrConnectWithoutStoryInputObjectSchema } from './ReviewCreateOrConnectWithoutStoryInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutStoryInput.schema';
import { ReviewCreateManyStoryInputEnvelopeObjectSchema } from './ReviewCreateManyStoryInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutStoryInput.schema';
import { ReviewUpdateManyWithWhereWithoutStoryInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutStoryInput.schema';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateManyWithoutStoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReviewCreateWithoutStoryInputObjectSchema),
        z.lazy(() => ReviewCreateWithoutStoryInputObjectSchema).array(),
        z.lazy(() => ReviewUncheckedCreateWithoutStoryInputObjectSchema),
        z
          .lazy(() => ReviewUncheckedCreateWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReviewCreateOrConnectWithoutStoryInputObjectSchema),
        z
          .lazy(() => ReviewCreateOrConnectWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ReviewUpsertWithWhereUniqueWithoutStoryInputObjectSchema),
        z
          .lazy(() => ReviewUpsertWithWhereUniqueWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReviewCreateManyStoryInputEnvelopeObjectSchema)
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
        z.lazy(() => ReviewUpdateWithWhereUniqueWithoutStoryInputObjectSchema),
        z
          .lazy(() => ReviewUpdateWithWhereUniqueWithoutStoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ReviewUpdateManyWithWhereWithoutStoryInputObjectSchema),
        z
          .lazy(() => ReviewUpdateManyWithWhereWithoutStoryInputObjectSchema)
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

export const ReviewUpdateManyWithoutStoryNestedInputObjectSchema = Schema;
