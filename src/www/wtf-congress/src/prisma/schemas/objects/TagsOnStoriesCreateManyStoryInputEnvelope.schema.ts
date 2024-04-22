import { z } from 'zod';
import { TagsOnStoriesCreateManyStoryInputObjectSchema } from './TagsOnStoriesCreateManyStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateManyStoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TagsOnStoriesCreateManyStoryInputObjectSchema),
      z.lazy(() => TagsOnStoriesCreateManyStoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TagsOnStoriesCreateManyStoryInputEnvelopeObjectSchema = Schema;
