import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutReviewsInputObjectSchema } from './StoryCreateWithoutReviewsInput.schema';
import { StoryUncheckedCreateWithoutReviewsInputObjectSchema } from './StoryUncheckedCreateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutReviewsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutReviewsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryCreateOrConnectWithoutReviewsInputObjectSchema = Schema;
