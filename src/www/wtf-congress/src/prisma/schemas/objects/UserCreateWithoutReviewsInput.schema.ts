import { z } from 'zod';
import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutReviewsInput> = z
  .object({
    username: z.string(),
    password: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    virtualAuthor: z.boolean().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    loggedInAt: z.coerce.date().optional().nullable(),
    Story: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutReviewsInputObjectSchema = Schema;
