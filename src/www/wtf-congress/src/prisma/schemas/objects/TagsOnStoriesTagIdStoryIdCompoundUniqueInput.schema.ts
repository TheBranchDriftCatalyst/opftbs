import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesTagIdStoryIdCompoundUniqueInput> = z
  .object({
    tagId: z.number(),
    storyId: z.number(),
  })
  .strict();

export const TagsOnStoriesTagIdStoryIdCompoundUniqueInputObjectSchema = Schema;
