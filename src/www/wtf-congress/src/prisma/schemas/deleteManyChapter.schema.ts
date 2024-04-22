import { z } from 'zod';
import { ChapterWhereInputObjectSchema } from './objects/ChapterWhereInput.schema';

export const ChapterDeleteManySchema = z.object({
  where: ChapterWhereInputObjectSchema.optional(),
});
