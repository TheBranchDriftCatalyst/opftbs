import { z } from 'zod';
import { UserCreateWithoutStoryInputObjectSchema } from './UserCreateWithoutStoryInput.schema';
import { UserUncheckedCreateWithoutStoryInputObjectSchema } from './UserUncheckedCreateWithoutStoryInput.schema';
import { UserCreateOrConnectWithoutStoryInputObjectSchema } from './UserCreateOrConnectWithoutStoryInput.schema';
import { UserUpsertWithoutStoryInputObjectSchema } from './UserUpsertWithoutStoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutStoryInputObjectSchema } from './UserUpdateWithoutStoryInput.schema';
import { UserUncheckedUpdateWithoutStoryInputObjectSchema } from './UserUncheckedUpdateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutStoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutStoryInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutStoryInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutStoryInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutStoryInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutStoryInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutStoryNestedInputObjectSchema = Schema;
