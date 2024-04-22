import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewUpdateOneSchema = z.object({
  select: ReviewSelectObjectSchema.optional(),
  include: ReviewIncludeObjectSchema.optional(),
  data: z.union([
    ReviewUpdateInputObjectSchema,
    ReviewUncheckedUpdateInputObjectSchema,
  ]),
  where: ReviewWhereUniqueInputObjectSchema,
});
