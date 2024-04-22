import { z } from 'zod';
import { ChapterCreateManyStoryInputObjectSchema } from './ChapterCreateManyStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ChapterCreateManyStoryInputObjectSchema),
      z.lazy(() => ChapterCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ChapterCreateManyStoryInputEnvelopeObjectSchema = Schema;
