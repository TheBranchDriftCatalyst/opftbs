import { z } from 'zod';
import { StoryUpdateWithoutReviewsInputObjectSchema } from './StoryUpdateWithoutReviewsInput.schema';
import { StoryUncheckedUpdateWithoutReviewsInputObjectSchema } from './StoryUncheckedUpdateWithoutReviewsInput.schema';
import { StoryCreateWithoutReviewsInputObjectSchema } from './StoryCreateWithoutReviewsInput.schema';
import { StoryUncheckedCreateWithoutReviewsInputObjectSchema } from './StoryUncheckedCreateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpsertWithoutReviewsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutReviewsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutReviewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutReviewsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpsertWithoutReviewsInputObjectSchema = Schema;
