import { z } from 'zod';
import { ReviewCreateNestedManyWithoutAuthorInputObjectSchema } from './ReviewCreateNestedManyWithoutAuthorInput.schema';
import { StoryCreateNestedManyWithoutAuthorInputObjectSchema } from './StoryCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    username: z.string(),
    password: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    virtualAuthor: z.boolean().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    loggedInAt: z.coerce.date().optional().nullable(),
    reviews: z
      .lazy(() => ReviewCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    Story: z
      .lazy(() => StoryCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
