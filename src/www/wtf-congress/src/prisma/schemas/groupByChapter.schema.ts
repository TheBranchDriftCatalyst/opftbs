import { z } from 'zod';
import { ChapterWhereInputObjectSchema } from './objects/ChapterWhereInput.schema';
import { ChapterOrderByWithAggregationInputObjectSchema } from './objects/ChapterOrderByWithAggregationInput.schema';
import { ChapterScalarWhereWithAggregatesInputObjectSchema } from './objects/ChapterScalarWhereWithAggregatesInput.schema';
import { ChapterScalarFieldEnumSchema } from './enums/ChapterScalarFieldEnum.schema';

export const ChapterGroupBySchema = z.object({
  where: ChapterWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ChapterOrderByWithAggregationInputObjectSchema,
      ChapterOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ChapterScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ChapterScalarFieldEnumSchema),
});
