import { z } from 'zod';
import { StoryFindManySchema } from '../findManyStory.schema';
import { StatsCountOutputTypeArgsObjectSchema } from './StatsCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StatsSelect> = z
  .object({
    id: z.boolean().optional(),
    views: z.boolean().optional(),
    Story: z.union([z.boolean(), z.lazy(() => StoryFindManySchema)]).optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StatsCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const StatsSelectObjectSchema = Schema;
