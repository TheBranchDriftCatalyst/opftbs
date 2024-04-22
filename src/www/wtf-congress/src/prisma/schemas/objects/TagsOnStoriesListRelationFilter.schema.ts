import { z } from 'zod';
import { TagsOnStoriesWhereInputObjectSchema } from './TagsOnStoriesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesListRelationFilter> = z
  .object({
    every: z.lazy(() => TagsOnStoriesWhereInputObjectSchema).optional(),
    some: z.lazy(() => TagsOnStoriesWhereInputObjectSchema).optional(),
    none: z.lazy(() => TagsOnStoriesWhereInputObjectSchema).optional(),
  })
  .strict();

export const TagsOnStoriesListRelationFilterObjectSchema = Schema;
