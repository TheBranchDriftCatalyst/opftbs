import { z } from 'zod';
import { ChapterSelectObjectSchema } from './ChapterSelect.schema';
import { ChapterIncludeObjectSchema } from './ChapterInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterArgs> = z
  .object({
    select: z.lazy(() => ChapterSelectObjectSchema).optional(),
    include: z.lazy(() => ChapterIncludeObjectSchema).optional(),
  })
  .strict();

export const ChapterArgsObjectSchema = Schema;
