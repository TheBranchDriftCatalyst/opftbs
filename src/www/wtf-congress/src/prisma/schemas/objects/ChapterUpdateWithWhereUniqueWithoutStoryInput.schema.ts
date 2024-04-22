import { z } from 'zod';
import { ChapterWhereUniqueInputObjectSchema } from './ChapterWhereUniqueInput.schema';
import { ChapterUpdateWithoutStoryInputObjectSchema } from './ChapterUpdateWithoutStoryInput.schema';
import { ChapterUncheckedUpdateWithoutStoryInputObjectSchema } from './ChapterUncheckedUpdateWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUpdateWithWhereUniqueWithoutStoryInput> =
  z
    .object({
      where: z.lazy(() => ChapterWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ChapterUpdateWithoutStoryInputObjectSchema),
        z.lazy(() => ChapterUncheckedUpdateWithoutStoryInputObjectSchema),
      ]),
    })
    .strict();

export const ChapterUpdateWithWhereUniqueWithoutStoryInputObjectSchema = Schema;
