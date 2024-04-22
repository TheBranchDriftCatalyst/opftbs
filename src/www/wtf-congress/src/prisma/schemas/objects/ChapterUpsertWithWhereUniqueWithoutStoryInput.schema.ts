import { z } from 'zod';
import { ChapterWhereUniqueInputObjectSchema } from './ChapterWhereUniqueInput.schema';
import { ChapterUpdateWithoutStoryInputObjectSchema } from './ChapterUpdateWithoutStoryInput.schema';
import { ChapterUncheckedUpdateWithoutStoryInputObjectSchema } from './ChapterUncheckedUpdateWithoutStoryInput.schema';
import { ChapterCreateWithoutStoryInputObjectSchema } from './ChapterCreateWithoutStoryInput.schema';
import { ChapterUncheckedCreateWithoutStoryInputObjectSchema } from './ChapterUncheckedCreateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUpsertWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => ChapterWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ChapterUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => ChapterUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ChapterCreateWithoutStoryInputObjectSchema),
        z.lazy(() => ChapterUncheckedCreateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict();

export const ChapterUpsertWithWhereUniqueWithoutStoryInputObjectSchema = Schema;
