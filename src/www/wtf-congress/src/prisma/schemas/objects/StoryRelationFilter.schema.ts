import { z } from 'zod';
import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryRelationFilter> = z
  .object({
    is: z
      .lazy(() => StoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => StoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StoryRelationFilterObjectSchema = Schema;
