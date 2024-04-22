import { z } from 'zod';
import { StoryFindManySchema } from '../findManyStory.schema';
import { StatsCountOutputTypeArgsObjectSchema } from './StatsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsInclude> = z
  .object({
    Story: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatsCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StatsIncludeObjectSchema = Schema;
