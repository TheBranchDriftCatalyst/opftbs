import { z } from 'zod';
import { ChapterWhereUniqueInputObjectSchema } from './ChapterWhereUniqueInput.schema';
import { ChapterCreateWithoutStoryInputObjectSchema } from './ChapterCreateWithoutStoryInput.schema';
import { ChapterUncheckedCreateWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterCreateOrConnectWithoutStoryInput> = z
  .object({
    where: z.lazy(() => ChapterWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ChapterCreateWithoutStoryInputObjectSchema),
      z.lazy(() => ChapterUncheckedCreateWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const ChapterCreateOrConnectWithoutStoryInputObjectSchema = Schema;
