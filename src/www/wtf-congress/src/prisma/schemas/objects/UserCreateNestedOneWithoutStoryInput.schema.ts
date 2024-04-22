import { z } from 'zod';
import { UserCreateWithoutStoryInputObjectSchema } from './UserCreateWithoutStoryInput.schema';
import { UserUncheckedCreateWithoutStoryInputObjectSchema } from './UserUncheckedCreateWithoutStoryInput.schema';
import { UserCreateOrConnectWithoutStoryInputObjectSchema } from './UserCreateOrConnectWithoutStoryInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutStoryInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutStoryInputObjectSchema = Schema;
