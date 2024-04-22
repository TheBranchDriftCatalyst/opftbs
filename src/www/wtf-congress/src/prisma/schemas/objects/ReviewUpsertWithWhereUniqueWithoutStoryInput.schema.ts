import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutStoryInputObjectSchema } from './ReviewUpdateWithoutStoryInput.schema';
import { ReviewUncheckedUpdateWithoutStoryInputObjectSchema } from './ReviewUncheckedUpdateWithoutStoryInput.schema';
import { ReviewCreateWithoutStoryInputObjectSchema } from './ReviewCreateWithoutStoryInput.schema';
import { ReviewUncheckedCreateWithoutStoryInputObjectSchema } from './ReviewUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutStoryInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ReviewUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutStoryInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpsertWithWhereUniqueWithoutStoryInputObjectSchema = Schema;
