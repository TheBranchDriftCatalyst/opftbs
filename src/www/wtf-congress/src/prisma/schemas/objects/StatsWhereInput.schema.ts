import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StoryListRelationFilterObjectSchema } from './StoryListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StatsWhereInputObjectSchema),
        z.lazy(() => StatsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StatsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StatsWhereInputObjectSchema),
        z.lazy(() => StatsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    views: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Story: z.lazy(() => StoryListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const StatsWhereInputObjectSchema = Schema;
