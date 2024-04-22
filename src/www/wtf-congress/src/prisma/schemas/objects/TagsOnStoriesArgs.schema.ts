import { z } from 'zod';
import { TagsOnStoriesSelectObjectSchema } from './TagsOnStoriesSelect.schema';
import { TagsOnStoriesIncludeObjectSchema } from './TagsOnStoriesInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesArgs> = z
  .object({
    select: z.lazy(() => TagsOnStoriesSelectObjectSchema).optional(),
    include: z.lazy(() => TagsOnStoriesIncludeObjectSchema).optional(),
  })
  .strict();

export const TagsOnStoriesArgsObjectSchema = Schema;
