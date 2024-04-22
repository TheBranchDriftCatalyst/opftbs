import { z } from 'zod';
import { StoryArgsObjectSchema } from './StoryArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewSelect> = z
  .object({
    id: z.boolean().optional(),
    storyId: z.boolean().optional(),
    userId: z.boolean().optional(),
    content: z.boolean().optional(),
    Story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ReviewSelectObjectSchema = Schema;
