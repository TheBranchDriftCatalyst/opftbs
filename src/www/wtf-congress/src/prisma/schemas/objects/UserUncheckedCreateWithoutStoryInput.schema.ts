import { z } from 'zod';
import { ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutStoryInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    virtualAuthor: z.boolean().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    loggedInAt: z.coerce.date().optional().nullable(),
    reviews: z
      .lazy(() => ReviewUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutStoryInputObjectSchema = Schema;
