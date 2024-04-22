import { z } from 'zod';
import { ReviewFindManySchema } from '../findManyReview.schema';
import { StoryFindManySchema } from '../findManyStory.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    reviews: z
      .union([z.boolean(), z.lazy(() => ReviewFindManySchema)])
      .optional(),
    Story: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserIncludeObjectSchema = Schema;
