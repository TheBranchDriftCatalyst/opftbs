import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';

export const ReviewCreateOneSchema = z.object({
  select: ReviewSelectObjectSchema.optional(),
  include: ReviewIncludeObjectSchema.optional(),
  data: z.union([
    ReviewCreateInputObjectSchema,
    ReviewUncheckedCreateInputObjectSchema,
  ]),
});
