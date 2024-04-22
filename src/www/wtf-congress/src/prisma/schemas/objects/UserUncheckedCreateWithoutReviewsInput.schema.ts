import { z } from 'zod';
import { StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewsInput> = z
  .object({
    id: z.number().optional(),
    username: z.string(),
    password: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    virtualAuthor: z.boolean().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    loggedInAt: z.coerce.date().optional().nullable(),
    Story: z
      .lazy(() => StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutReviewsInputObjectSchema = Schema;
