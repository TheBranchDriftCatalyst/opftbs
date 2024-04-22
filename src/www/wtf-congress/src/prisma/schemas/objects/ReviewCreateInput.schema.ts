import { z } from 'zod';
import { StoryCreateNestedOneWithoutReviewsInputObjectSchema } from './StoryCreateNestedOneWithoutReviewsInput.schema';
import { UserCreateNestedOneWithoutReviewsInputObjectSchema } from './UserCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    content: z.string(),
    Story: z.lazy(() => StoryCreateNestedOneWithoutReviewsInputObjectSchema),
    author: z.lazy(() => UserCreateNestedOneWithoutReviewsInputObjectSchema),
  })
  .strict();

export const ReviewCreateInputObjectSchema = Schema;
