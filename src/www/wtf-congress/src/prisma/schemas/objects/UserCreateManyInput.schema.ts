import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    virtualAuthor: z.boolean().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    loggedInAt: z.coerce.date().optional().nullable(),
  })
  .strict();

export const UserCreateManyInputObjectSchema = Schema;
