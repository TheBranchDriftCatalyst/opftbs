import { z } from 'zod';
import { ReviewCreateWithoutStoryInputObjectSchema } from './ReviewCreateWithoutStoryInput.schema';
import { ReviewUncheckedCreateWithoutStoryInputObjectSchema } from './ReviewUncheckedCreateWithoutStoryInput.schema';
import { ReviewCreateOrConnectWithoutStoryInputObjectSchema } from './ReviewCreateOrConnectWithoutStoryInput.schema';
import { ReviewCreateManyStoryInputEnvelopeObjectSchema } from './ReviewCreateManyStoryInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutStoryInput> =
  z
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
      createMany: z
        .lazy(() => ReviewCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReviewUncheckedCreateNestedManyWithoutStoryInputObjectSchema =
  Schema;
