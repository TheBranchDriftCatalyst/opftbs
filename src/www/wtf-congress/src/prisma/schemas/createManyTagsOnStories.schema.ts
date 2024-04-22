import { z } from 'zod';
import { TagsOnStoriesCreateManyInputObjectSchema } from './objects/TagsOnStoriesCreateManyInput.schema';

export const TagsOnStoriesCreateManySchema = z.object({
  data: z.union([
    TagsOnStoriesCreateManyInputObjectSchema,
    z.array(TagsOnStoriesCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
