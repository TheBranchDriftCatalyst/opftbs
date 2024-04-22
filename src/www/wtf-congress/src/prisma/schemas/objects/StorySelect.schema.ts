import { z } from 'zod';
import { ChapterFindManySchema } from '../findManyChapter.schema';
import { ReviewFindManySchema } from '../findManyReview.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { StatsArgsObjectSchema } from './StatsArgs.schema';
import { TagsOnStoriesFindManySchema } from '../findManyTagsOnStories.schema';
import { StoryCountOutputTypeArgsObjectSchema } from './StoryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StorySelect> = z
  .object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    title: z.boolean().optional(),
    summary: z.boolean().optional(),
    authorId: z.boolean().optional(),
    chapters: z
      .union([z.boolean(), z.lazy(() => ChapterFindManySchema)])
      .optional(),
    createdAt: z.boolean().optional(),
    reviews: z
      .union([z.boolean(), z.lazy(() => ReviewFindManySchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
    stats: z
      .union([z.boolean(), z.lazy(() => StatsArgsObjectSchema)])
      .optional(),
    tags: z
      .union([z.boolean(), z.lazy(() => TagsOnStoriesFindManySchema)])
      .optional(),
    statsId: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StorySelectObjectSchema = Schema;
