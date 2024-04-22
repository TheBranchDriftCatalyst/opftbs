import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './objects/TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './objects/TagsOnStoriesInclude.schema';
import { TagsOnStoriesCreateInputObjectSchema } from './objects/TagsOnStoriesCreateInput.schema';
import { TagsOnStoriesUncheckedCreateInputObjectSchema } from './objects/TagsOnStoriesUncheckedCreateInput.schema';

export const TagsOnStoriesCreateOneSchema = z.object({
  select: TagsOnStoriesSelectObjectSchema.optional(),
  include: TagsOnStoriesIncludeObjectSchema.optional(),
  data: z.union([
    TagsOnStoriesCreateInputObjectSchema,
    TagsOnStoriesUncheckedCreateInputObjectSchema,
  ]),
});
