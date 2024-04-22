import { z } from 'zod';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutStoryInput> = z
  .object({
    content: z.string(),
    author: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  })
  .strict();

export const ReviewCreateWithoutStoryInputObjectSchema = Schema;
