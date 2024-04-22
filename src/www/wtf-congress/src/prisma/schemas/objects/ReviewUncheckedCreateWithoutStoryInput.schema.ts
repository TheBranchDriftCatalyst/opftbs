import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutStoryInput> = z
  .object({
    id: z.number().optional(),
    userId: z.number(),
    content: z.string(),
  })
  .strict();

export const ReviewUncheckedCreateWithoutStoryInputObjectSchema = Schema;
