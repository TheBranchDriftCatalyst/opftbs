import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateManyTagInput> = z
  .object({
    storyId: z.number(),
  })
  .strict();

export const TagsOnStoriesCreateManyTagInputObjectSchema = Schema;
