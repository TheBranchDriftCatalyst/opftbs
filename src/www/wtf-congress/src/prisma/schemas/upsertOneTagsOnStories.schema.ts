import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './objects/TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './objects/TagsOnStoriesInclude.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './objects/TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesCreateInputObjectSchema } from './objects/TagsOnStoriesCreateInput.schema';
import { TagsOnStoriesUncheckedCreateInputObjectSchema } from './objects/TagsOnStoriesUncheckedCreateInput.schema';
import { TagsOnStoriesUpdateInputObjectSchema } from './objects/TagsOnStoriesUpdateInput.schema';
import { TagsOnStoriesUncheckedUpdateInputObjectSchema } from './objects/TagsOnStoriesUncheckedUpdateInput.schema';

export const TagsOnStoriesUpsertSchema = z.object({
  select: TagsOnStoriesSelectObjectSchema.optional(),
  include: TagsOnStoriesIncludeObjectSchema.optional(),
  where: TagsOnStoriesWhereUniqueInputObjectSchema,
  create: z.union([
    TagsOnStoriesCreateInputObjectSchema,
    TagsOnStoriesUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TagsOnStoriesUpdateInputObjectSchema,
    TagsOnStoriesUncheckedUpdateInputObjectSchema,
  ]),
});
