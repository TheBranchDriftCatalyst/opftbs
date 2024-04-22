import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutStoryInputObjectSchema } from './ReviewCreateWithoutStoryInput.schema';
import { ReviewUncheckedCreateWithoutStoryInputObjectSchema } from './ReviewUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutStoryInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewCreateOrConnectWithoutStoryInputObjectSchema = Schema;
