import { z } from 'zod';
import { ReviewFindManySchema } from '../findManyReview.schema';
import { StoryFindManySchema } from '../findManyStory.schema';
import { UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    username: z.boolean().optional(),
    password: z.boolean().optional(),
    email: z.boolean().optional(),
    virtualAuthor: z.boolean().optional(),
    reviews: z
      .union([z.boolean(), z.lazy(() => ReviewFindManySchema)])
      .optional(),
    Story: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    loggedInAt: z.boolean().optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UserSelectObjectSchema = Schema;
