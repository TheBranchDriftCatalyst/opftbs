import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutStoryInputObjectSchema } from './ReviewUpdateWithoutStoryInput.schema';
import { ReviewUncheckedUpdateWithoutStoryInputObjectSchema } from './ReviewUncheckedUpdateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutStoryInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ReviewUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema;
