import { z } from 'zod';
import { ChapterSelectObjectSchema } from './objects/ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './objects/ChapterInclude.schema';
import { ChapterCreateInputObjectSchema } from './objects/ChapterCreateInput.schema';
import { ChapterUncheckedCreateInputObjectSchema } from './objects/ChapterUncheckedCreateInput.schema';

export const ChapterCreateOneSchema = z.object({
  select: ChapterSelectObjectSchema.optional(),
  include: ChapterIncludeObjectSchema.optional(),
  data: z.union([
    ChapterCreateInputObjectSchema,
    ChapterUncheckedCreateInputObjectSchema,
  ]),
});
