import { z } from 'zod';
import { ChapterOrderByWithRelationInputObjectSchema } from './objects/ChapterOrderByWithRelationInput.schema';
import { ChapterWhereInputObjectSchema } from './objects/ChapterWhereInput.schema';
import { ChapterWhereUniqueInputObjectSchema } from './objects/ChapterWhereUniqueInput.schema';
import { ChapterCountAggregateInputObjectSchema } from './objects/ChapterCountAggregateInput.schema';
import { ChapterMinAggregateInputObjectSchema } from './objects/ChapterMinAggregateInput.schema';
import { ChapterMaxAggregateInputObjectSchema } from './objects/ChapterMaxAggregateInput.schema';
import { ChapterAvgAggregateInputObjectSchema } from './objects/ChapterAvgAggregateInput.schema';
import { ChapterSumAggregateInputObjectSchema } from './objects/ChapterSumAggregateInput.schema';

export const ChapterAggregateSchema = z.object({
  orderBy: z
    .union([
      ChapterOrderByWithRelationInputObjectSchema,
      ChapterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChapterWhereInputObjectSchema.optional(),
  cursor: ChapterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ChapterCountAggregateInputObjectSchema])
    .optional(),
  _min: ChapterMinAggregateInputObjectSchema.optional(),
  _max: ChapterMaxAggregateInputObjectSchema.optional(),
  _avg: ChapterAvgAggregateInputObjectSchema.optional(),
  _sum: ChapterSumAggregateInputObjectSchema.optional(),
});
