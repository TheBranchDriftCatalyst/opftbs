import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './objects/TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './objects/TagsOnStoriesInclude.schema';
import { TagsOnStoriesOrderByWithRelationInputObjectSchema } from './objects/TagsOnStoriesOrderByWithRelationInput.schema';
import { TagsOnStoriesWhereInputObjectSchema } from './objects/TagsOnStoriesWhereInput.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './objects/TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesScalarFieldEnumSchema } from './enums/TagsOnStoriesScalarFieldEnum.schema';

export const TagsOnStoriesFindManySchema = z.object({
  select: z.lazy(() => TagsOnStoriesSelectObjectSchema.optional()),
  include: z.lazy(() => TagsOnStoriesIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      TagsOnStoriesOrderByWithRelationInputObjectSchema,
      TagsOnStoriesOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TagsOnStoriesWhereInputObjectSchema.optional(),
  cursor: TagsOnStoriesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TagsOnStoriesScalarFieldEnumSchema).optional(),
});
