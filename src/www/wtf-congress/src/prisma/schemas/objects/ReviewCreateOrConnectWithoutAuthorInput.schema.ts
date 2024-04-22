import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutAuthorInputObjectSchema } from './ReviewCreateWithoutAuthorInput.schema';
import { ReviewUncheckedCreateWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutAuthorInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewCreateOrConnectWithoutAuthorInputObjectSchema = Schema;
