import { z } from 'zod';
import { TagsOnStoriesTagIdStoryIdCompoundUniqueInputObjectSchema } from './TagsOnStoriesTagIdStoryIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesWhereUniqueInput> = z
  .object({
    tagId_storyId: z
      .lazy(() => TagsOnStoriesTagIdStoryIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const TagsOnStoriesWhereUniqueInputObjectSchema = Schema;
