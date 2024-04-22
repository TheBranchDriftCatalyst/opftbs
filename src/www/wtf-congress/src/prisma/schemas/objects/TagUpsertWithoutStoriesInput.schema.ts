import { z } from 'zod';
import { TagUpdateWithoutStoriesInputObjectSchema } from './TagUpdateWithoutStoriesInput.schema';
import { TagUncheckedUpdateWithoutStoriesInputObjectSchema } from './TagUncheckedUpdateWithoutStoriesInput.schema';
import { TagCreateWithoutStoriesInputObjectSchema } from './TagCreateWithoutStoriesInput.schema';
import { TagUncheckedCreateWithoutStoriesInputObjectSchema } from './TagUncheckedCreateWithoutStoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithoutStoriesInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutStoriesInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutStoriesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithoutStoriesInputObjectSchema = Schema;
