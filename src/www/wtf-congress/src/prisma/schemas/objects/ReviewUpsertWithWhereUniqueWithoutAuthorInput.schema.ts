import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutAuthorInputObjectSchema } from './ReviewUpdateWithoutAuthorInput.schema';
import { ReviewUncheckedUpdateWithoutAuthorInputObjectSchema } from './ReviewUncheckedUpdateWithoutAuthorInput.schema';
import { ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReviewUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpsertWithWhereUniqueWithoutAuthorInputObjectSchema = Schema;
