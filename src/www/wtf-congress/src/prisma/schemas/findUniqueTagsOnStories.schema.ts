import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './objects/TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './objects/TagsOnStoriesInclude.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './objects/TagsOnStoriesWhereUniqueInput.schema';

export const TagsOnStoriesFindUniqueSchema = z.object({
  select: TagsOnStoriesSelectObjectSchema.optional(),
  include: TagsOnStoriesIncludeObjectSchema.optional(),
  where: TagsOnStoriesWhereUniqueInputObjectSchema,
});
