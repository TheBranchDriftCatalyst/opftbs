import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './objects/TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './objects/TagsOnStoriesInclude.schema';
import { TagsOnStoriesUpdateInputObjectSchema } from './objects/TagsOnStoriesUpdateInput.schema';
import { TagsOnStoriesUncheckedUpdateInputObjectSchema } from './objects/TagsOnStoriesUncheckedUpdateInput.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './objects/TagsOnStoriesWhereUniqueInput.schema';

export const TagsOnStoriesUpdateOneSchema = z.object({
  select: TagsOnStoriesSelectObjectSchema.optional(),
  include: TagsOnStoriesIncludeObjectSchema.optional(),
  data: z.union([
    TagsOnStoriesUpdateInputObjectSchema,
    TagsOnStoriesUncheckedUpdateInputObjectSchema,
  ]),
  where: TagsOnStoriesWhereUniqueInputObjectSchema,
});
