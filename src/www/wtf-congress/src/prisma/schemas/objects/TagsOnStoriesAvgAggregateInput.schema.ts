import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesAvgAggregateInputType> = z
  .object({
    tagId: z.literal(true).optional(),
    storyId: z.literal(true).optional(),
  })
  .strict();

export const TagsOnStoriesAvgAggregateInputObjectSchema = Schema;
