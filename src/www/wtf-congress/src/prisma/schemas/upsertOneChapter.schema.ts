import { z } from 'zod';
import { ChapterSelectObjectSchema } from './objects/ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './objects/ChapterInclude.schema';
import { ChapterWhereUniqueInputObjectSchema } from './objects/ChapterWhereUniqueInput.schema';
import { ChapterCreateInputObjectSchema } from './objects/ChapterCreateInput.schema';
import { ChapterUncheckedCreateInputObjectSchema } from './objects/ChapterUncheckedCreateInput.schema';
import { ChapterUpdateInputObjectSchema } from './objects/ChapterUpdateInput.schema';
import { ChapterUncheckedUpdateInputObjectSchema } from './objects/ChapterUncheckedUpdateInput.schema';

export const ChapterUpsertSchema = z.object({
  select: ChapterSelectObjectSchema.optional(),
  include: ChapterIncludeObjectSchema.optional(),
  where: ChapterWhereUniqueInputObjectSchema,
  create: z.union([
    ChapterCreateInputObjectSchema,
    ChapterUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ChapterUpdateInputObjectSchema,
    ChapterUncheckedUpdateInputObjectSchema,
  ]),
});
