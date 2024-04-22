import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewDeleteOneSchema = z.object({
  select: ReviewSelectObjectSchema.optional(),
  include: ReviewIncludeObjectSchema.optional(),
  where: ReviewWhereUniqueInputObjectSchema,
});
