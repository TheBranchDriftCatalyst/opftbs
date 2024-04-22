import { z } from 'zod';
import { StoryCreateNestedOneWithoutReviewsInputObjectSchema } from './StoryCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutAuthorInput> = z
  .object({
    content: z.string(),
    Story: z.lazy(() => StoryCreateNestedOneWithoutReviewsInputObjectSchema),
  })
  .strict();

export const ReviewCreateWithoutAuthorInputObjectSchema = Schema;
