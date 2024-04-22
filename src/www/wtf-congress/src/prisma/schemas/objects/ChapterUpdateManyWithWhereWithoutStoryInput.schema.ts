import { z } from 'zod';
import { ChapterScalarWhereInputObjectSchema } from './ChapterScalarWhereInput.schema';
import { ChapterUpdateManyMutationInputObjectSchema } from './ChapterUpdateManyMutationInput.schema';
import { ChapterUncheckedUpdateManyWithoutChaptersInputObjectSchema } from './ChapterUncheckedUpdateManyWithoutChaptersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterUpdateManyWithWhereWithoutStoryInput> = z
  .object({
    where: z.lazy(() => ChapterScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ChapterUpdateManyMutationInputObjectSchema),
      z.lazy(() => ChapterUncheckedUpdateManyWithoutChaptersInputObjectSchema),
    ]),
  })
  .strict();

export const ChapterUpdateManyWithWhereWithoutStoryInputObjectSchema = Schema;
