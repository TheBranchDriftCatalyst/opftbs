import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUpdateManyMutationInput> = z
  .object({})
  .strict();

export const TagsOnStoriesUpdateManyMutationInputObjectSchema = Schema;
