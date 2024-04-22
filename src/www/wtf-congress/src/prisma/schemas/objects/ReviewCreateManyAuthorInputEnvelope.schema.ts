import { z } from 'zod';
import { ReviewCreateManyAuthorInputObjectSchema } from './ReviewCreateManyAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyAuthorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewCreateManyAuthorInputObjectSchema),
      z.lazy(() => ReviewCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReviewCreateManyAuthorInputEnvelopeObjectSchema = Schema;
