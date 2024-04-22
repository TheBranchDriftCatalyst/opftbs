import { z } from 'zod';
import { TagsOnStoriesWhereInputObjectSchema } from './objects/TagsOnStoriesWhereInput.schema';
import { TagsOnStoriesOrderByWithAggregationInputObjectSchema } from './objects/TagsOnStoriesOrderByWithAggregationInput.schema';
import { TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema } from './objects/TagsOnStoriesScalarWhereWithAggregatesInput.schema';
import { TagsOnStoriesScalarFieldEnumSchema } from './enums/TagsOnStoriesScalarFieldEnum.schema';

export const TagsOnStoriesGroupBySchema = z.object({
  where: TagsOnStoriesWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TagsOnStoriesOrderByWithAggregationInputObjectSchema,
      TagsOnStoriesOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TagsOnStoriesScalarFieldEnumSchema),
});
