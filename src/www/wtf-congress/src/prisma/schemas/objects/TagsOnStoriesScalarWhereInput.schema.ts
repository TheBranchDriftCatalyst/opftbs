import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema),
        z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagsOnStoriesScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema),
        z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    tagId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    storyId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const TagsOnStoriesScalarWhereInputObjectSchema = Schema;
