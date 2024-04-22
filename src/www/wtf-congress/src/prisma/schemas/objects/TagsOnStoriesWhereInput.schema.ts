import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { TagRelationFilterObjectSchema } from './TagRelationFilter.schema';
import { TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { StoryRelationFilterObjectSchema } from './StoryRelationFilter.schema';
import { StoryWhereInputObjectSchema } from './StoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsOnStoriesWhereInputObjectSchema),
        z.lazy(() => TagsOnStoriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsOnStoriesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsOnStoriesWhereInputObjectSchema),
        z.lazy(() => TagsOnStoriesWhereInputObjectSchema).array(),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    storyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tag: z
      .union([
        z.lazy(() => TagRelationFilterObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema),
      ])
      .optional(),
    story: z
      .union([
        z.lazy(() => StoryRelationFilterObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagsOnStoriesWhereInputObjectSchema = Schema;
