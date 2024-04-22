import { z } from 'zod';
import { TagsOnStoriesWhereInputObjectSchema } from './objects/TagsOnStoriesWhereInput.schema';

export const TagsOnStoriesDeleteManySchema = z.object({
  where: TagsOnStoriesWhereInputObjectSchema.optional(),
});
