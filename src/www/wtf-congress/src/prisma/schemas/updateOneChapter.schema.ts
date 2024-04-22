import { z } from 'zod';
import { ChapterSelectObjectSchema } from './objects/ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './objects/ChapterInclude.schema';
import { ChapterUpdateInputObjectSchema } from './objects/ChapterUpdateInput.schema';
import { ChapterUncheckedUpdateInputObjectSchema } from './objects/ChapterUncheckedUpdateInput.schema';
import { ChapterWhereUniqueInputObjectSchema } from './objects/ChapterWhereUniqueInput.schema';

export const ChapterUpdateOneSchema = z.object({
  select: ChapterSelectObjectSchema.optional(),
  include: ChapterIncludeObjectSchema.optional(),
  data: z.union([
    ChapterUpdateInputObjectSchema,
    ChapterUncheckedUpdateInputObjectSchema,
  ]),
  where: ChapterWhereUniqueInputObjectSchema,
});
