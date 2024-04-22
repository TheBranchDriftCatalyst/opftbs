import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutAuthorInputObjectSchema } from './ReviewUpdateWithoutAuthorInput.schema';
import { ReviewUncheckedUpdateWithoutAuthorInputObjectSchema } from './ReviewUncheckedUpdateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutAuthorInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutAuthorInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpdateWithWhereUniqueWithoutAuthorInputObjectSchema = Schema;
