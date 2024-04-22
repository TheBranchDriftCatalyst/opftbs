import { z } from 'zod';
import { ReviewCreateManyStoryInputObjectSchema } from './ReviewCreateManyStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewCreateManyStoryInputObjectSchema),
      z.lazy(() => ReviewCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReviewCreateManyStoryInputEnvelopeObjectSchema = Schema;
