import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    storyId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TagsOnStoriesScalarWhereWithAggregatesInputObjectSchema = Schema;
