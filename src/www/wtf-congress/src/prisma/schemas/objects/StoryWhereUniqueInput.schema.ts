import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    uuid: z.string().optional(),
  })
  .strict();

export const StoryWhereUniqueInputObjectSchema = Schema;
