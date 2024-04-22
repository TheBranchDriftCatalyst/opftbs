import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ChapterListRelationFilterObjectSchema } from './ChapterListRelationFilter.schema';
import { ReviewListRelationFilterObjectSchema } from './ReviewListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StatsRelationFilterObjectSchema } from './StatsRelationFilter.schema';
import { StatsWhereInputObjectSchema } from './StatsWhereInput.schema';
import { TagsOnStoriesListRelationFilterObjectSchema } from './TagsOnStoriesListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StoryWhereInputObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StoryWhereInputObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    uuid: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    summary: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    authorId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    statsId: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    chapters: z.lazy(() => ChapterListRelationFilterObjectSchema).optional(),
    reviews: z.lazy(() => ReviewListRelationFilterObjectSchema).optional(),
    author: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    stats: z
      .union([
        z.lazy(() => StatsRelationFilterObjectSchema),
        z.lazy(() => StatsWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tags: z.lazy(() => TagsOnStoriesListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const StoryWhereInputObjectSchema = Schema;
