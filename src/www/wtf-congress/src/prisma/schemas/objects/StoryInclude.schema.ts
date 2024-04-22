import { z } from 'zod';
import { ChapterFindManySchema } from '../findManyChapter.schema';
import { ReviewFindManySchema } from '../findManyReview.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { StatsArgsObjectSchema } from './StatsArgs.schema';
import { TagsOnStoriesFindManySchema } from '../findManyTagsOnStories.schema';
import { StoryCountOutputTypeArgsObjectSchema } from './StoryCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryInclude> = z
  .object({
    chapters: z
      .union([z.boolean(), z.lazy(() => ChapterFindManySchema)])
      .optional(),
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
    _count: z
      .union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StoryIncludeObjectSchema = Schema;
