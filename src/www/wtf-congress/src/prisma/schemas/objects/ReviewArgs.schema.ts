import { z } from 'zod';
import { ReviewSelectObjectSchema } from './ReviewSelect.schema';
import { ReviewIncludeObjectSchema } from './ReviewInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewArgs> = z
  .object({
    select: z.lazy(() => ReviewSelectObjectSchema).optional(),
    include: z.lazy(() => ReviewIncludeObjectSchema).optional(),
  })
  .strict();

export const ReviewArgsObjectSchema = Schema;
