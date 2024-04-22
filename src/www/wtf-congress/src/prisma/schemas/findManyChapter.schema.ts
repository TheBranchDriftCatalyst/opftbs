import { z } from 'zod';
import { ChapterSelectObjectSchema } from './objects/ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './objects/ChapterInclude.schema';
import { ChapterOrderByWithRelationInputObjectSchema } from './objects/ChapterOrderByWithRelationInput.schema';
import { ChapterWhereInputObjectSchema } from './objects/ChapterWhereInput.schema';
import { ChapterWhereUniqueInputObjectSchema } from './objects/ChapterWhereUniqueInput.schema';
import { ChapterScalarFieldEnumSchema } from './enums/ChapterScalarFieldEnum.schema';

export const ChapterFindManySchema = z.object({
  select: z.lazy(() => ChapterSelectObjectSchema.optional()),
  include: z.lazy(() => ChapterIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ChapterOrderByWithRelationInputObjectSchema,
      ChapterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChapterWhereInputObjectSchema.optional(),
  cursor: ChapterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ChapterScalarFieldEnumSchema).optional(),
});
