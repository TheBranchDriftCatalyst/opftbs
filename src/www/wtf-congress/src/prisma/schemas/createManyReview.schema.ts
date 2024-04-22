import { z } from 'zod';
import { ReviewCreateManyInputObjectSchema } from './objects/ReviewCreateManyInput.schema';

export const ReviewCreateManySchema = z.object({
  data: z.union([
    ReviewCreateManyInputObjectSchema,
    z.array(ReviewCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
