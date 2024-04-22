import { z } from 'zod';
import { StoryUpdateWithoutTagsInputObjectSchema } from './StoryUpdateWithoutTagsInput.schema';
import { StoryUncheckedUpdateWithoutTagsInputObjectSchema } from './StoryUncheckedUpdateWithoutTagsInput.schema';
import { StoryCreateWithoutTagsInputObjectSchema } from './StoryCreateWithoutTagsInput.schema';
import { StoryUncheckedCreateWithoutTagsInputObjectSchema } from './StoryUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpsertWithoutTagsInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutTagsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpsertWithoutTagsInputObjectSchema = Schema;
