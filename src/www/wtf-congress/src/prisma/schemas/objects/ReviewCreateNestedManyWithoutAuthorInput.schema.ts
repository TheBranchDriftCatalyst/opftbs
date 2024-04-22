import { z } from 'zod';
import { ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';
import { ReviewCreateOrConnectWithoutAuthorInputObjectSchema } from './ReviewCreateOrConnectWithoutAuthorInput.schema';
import { ReviewCreateManyAuthorInputEnvelopeObjectSchema } from './ReviewCreateManyAuthorInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutAuthorInput> = z
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
    createMany: z
      .lazy(() => ReviewCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReviewCreateNestedManyWithoutAuthorInputObjectSchema = Schema;
