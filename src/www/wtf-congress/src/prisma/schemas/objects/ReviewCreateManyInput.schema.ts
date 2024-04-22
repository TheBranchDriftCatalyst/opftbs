import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyInput> = z
  .object({
    id: z.number().optional(),
    storyId: z.number(),
    userId: z.number(),
    content: z.string(),
  })
  .strict();

export const ReviewCreateManyInputObjectSchema = Schema;
