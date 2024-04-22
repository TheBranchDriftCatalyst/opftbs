import { z } from 'zod';
import { TagsOnStoriesUpdateManyMutationInputObjectSchema } from './objects/TagsOnStoriesUpdateManyMutationInput.schema';
import { TagsOnStoriesWhereInputObjectSchema } from './objects/TagsOnStoriesWhereInput.schema';

export const TagsOnStoriesUpdateManySchema = z.object({
  data: TagsOnStoriesUpdateManyMutationInputObjectSchema,
  where: TagsOnStoriesWhereInputObjectSchema.optional(),
});
