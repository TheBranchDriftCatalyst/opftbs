import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyAuthorInput> = z
  .object({
    id: z.number().optional(),
    storyId: z.number(),
    content: z.string(),
  })
  .strict();

export const ReviewCreateManyAuthorInputObjectSchema = Schema;
