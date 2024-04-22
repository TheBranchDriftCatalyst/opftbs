import { z } from 'zod';
import { ChapterSelectObjectSchema } from './objects/ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './objects/ChapterInclude.schema';
import { ChapterWhereUniqueInputObjectSchema } from './objects/ChapterWhereUniqueInput.schema';

export const ChapterFindUniqueSchema = z.object({
  select: ChapterSelectObjectSchema.optional(),
  include: ChapterIncludeObjectSchema.optional(),
  where: ChapterWhereUniqueInputObjectSchema,
});
