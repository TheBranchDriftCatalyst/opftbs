import { z } from 'zod';
import { StoryUpdateWithoutChaptersInputObjectSchema } from './StoryUpdateWithoutChaptersInput.schema';
import { StoryUncheckedUpdateWithoutChaptersInputObjectSchema } from './StoryUncheckedUpdateWithoutChaptersInput.schema';
import { StoryCreateWithoutChaptersInputObjectSchema } from './StoryCreateWithoutChaptersInput.schema';
import { StoryUncheckedCreateWithoutChaptersInputObjectSchema } from './StoryUncheckedCreateWithoutChaptersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpsertWithoutChaptersInput> = z
  .object({
    update: z.union([
      z.lazy(() => StoryUpdateWithoutChaptersInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateWithoutChaptersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => StoryCreateWithoutChaptersInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutChaptersInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpsertWithoutChaptersInputObjectSchema = Schema;
