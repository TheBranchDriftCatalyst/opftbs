import { z } from 'zod';
import { StoryCreateManyStatsInputObjectSchema } from './StoryCreateManyStatsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateManyStatsInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => StoryCreateManyStatsInputObjectSchema),
      z.lazy(() => StoryCreateManyStatsInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const StoryCreateManyStatsInputEnvelopeObjectSchema = Schema;
