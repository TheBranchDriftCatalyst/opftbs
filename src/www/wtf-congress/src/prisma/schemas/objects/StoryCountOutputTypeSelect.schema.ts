import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = z
  .object({
    chapters: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
  })
  .strict();

export const StoryCountOutputTypeSelectObjectSchema = Schema;
