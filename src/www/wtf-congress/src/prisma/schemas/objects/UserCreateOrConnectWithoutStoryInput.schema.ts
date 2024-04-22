import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutStoryInputObjectSchema } from './UserCreateWithoutStoryInput.schema';
import { UserUncheckedCreateWithoutStoryInputObjectSchema } from './UserUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutStoryInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutStoryInputObjectSchema = Schema;
