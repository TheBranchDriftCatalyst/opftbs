import { z } from 'zod';
import { ChapterUpdateManyMutationInputObjectSchema } from './objects/ChapterUpdateManyMutationInput.schema';
import { ChapterWhereInputObjectSchema } from './objects/ChapterWhereInput.schema';

export const ChapterUpdateManySchema = z.object({
  data: ChapterUpdateManyMutationInputObjectSchema,
  where: ChapterWhereInputObjectSchema.optional(),
});
