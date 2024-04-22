import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateManyAuthorInput> = z
  .object({
    id: z.number().optional(),
    uuid: z.string().optional(),
    title: z.string(),
    summary: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    statsId: z.number().optional().nullable(),
  })
  .strict();

export const StoryCreateManyAuthorInputObjectSchema = Schema;
