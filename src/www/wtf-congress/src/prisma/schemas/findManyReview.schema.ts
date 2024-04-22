import { z } from 'zod';
import { ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';

export const ReviewFindManySchema = z.object({
  select: z.lazy(() => ReviewSelectObjectSchema.optional()),
  include: z.lazy(() => ReviewIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ReviewOrderByWithRelationInputObjectSchema,
      ReviewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewWhereInputObjectSchema.optional(),
  cursor: ReviewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReviewScalarFieldEnumSchema).optional(),
});
