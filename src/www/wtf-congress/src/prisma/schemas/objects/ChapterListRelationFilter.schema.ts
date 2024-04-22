import { z } from 'zod';
import { ChapterWhereInputObjectSchema } from './ChapterWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterListRelationFilter> = z
  .object({
    every: z.lazy(() => ChapterWhereInputObjectSchema).optional(),
    some: z.lazy(() => ChapterWhereInputObjectSchema).optional(),
    none: z.lazy(() => ChapterWhereInputObjectSchema).optional(),
  })
  .strict();

export const ChapterListRelationFilterObjectSchema = Schema;
