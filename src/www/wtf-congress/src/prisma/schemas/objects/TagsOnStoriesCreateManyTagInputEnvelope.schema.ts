import { z } from 'zod';
import { TagsOnStoriesCreateManyTagInputObjectSchema } from './TagsOnStoriesCreateManyTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateManyTagInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TagsOnStoriesCreateManyTagInputObjectSchema),
      z.lazy(() => TagsOnStoriesCreateManyTagInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagsOnStoriesCreateManyTagInputEnvelopeObjectSchema = Schema;
