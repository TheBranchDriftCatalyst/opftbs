import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedCreateWithoutStoryInput> =
  z
    .object({
      tagId: z.number(),
    })
    .strict();

export const TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema = Schema;
