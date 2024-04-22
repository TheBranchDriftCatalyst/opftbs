import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';
import { ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';

export const ReviewUpsertSchema = z.object({
  select: ReviewSelectObjectSchema.optional(),
  include: ReviewIncludeObjectSchema.optional(),
  where: ReviewWhereUniqueInputObjectSchema,
  create: z.union([
    ReviewCreateInputObjectSchema,
    ReviewUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReviewUpdateInputObjectSchema,
    ReviewUncheckedUpdateInputObjectSchema,
  ]),
});
