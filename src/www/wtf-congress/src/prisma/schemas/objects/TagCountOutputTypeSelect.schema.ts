import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z
  .object({
    stories: z.boolean().optional(),
  })
  .strict();

export const TagCountOutputTypeSelectObjectSchema = Schema;
