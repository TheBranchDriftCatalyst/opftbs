import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedCreateWithoutTagInput> = z
  .object({
    storyId: z.number(),
  })
  .strict();

export const TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema = Schema;
