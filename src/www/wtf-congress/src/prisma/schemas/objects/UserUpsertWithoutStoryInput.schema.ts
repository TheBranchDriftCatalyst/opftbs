import { z } from 'zod';
import { UserUpdateWithoutStoryInputObjectSchema } from './UserUpdateWithoutStoryInput.schema';
import { UserUncheckedUpdateWithoutStoryInputObjectSchema } from './UserUncheckedUpdateWithoutStoryInput.schema';
import { UserCreateWithoutStoryInputObjectSchema } from './UserCreateWithoutStoryInput.schema';
import { UserUncheckedCreateWithoutStoryInputObjectSchema } from './UserUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutStoryInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutStoryInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutStoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutStoryInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutStoryInputObjectSchema = Schema;
