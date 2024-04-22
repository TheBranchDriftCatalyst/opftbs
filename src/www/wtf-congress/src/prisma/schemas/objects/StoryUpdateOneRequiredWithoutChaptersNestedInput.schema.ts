import { z } from 'zod';
import { StoryCreateWithoutChaptersInputObjectSchema } from './StoryCreateWithoutChaptersInput.schema';
import { StoryUncheckedCreateWithoutChaptersInputObjectSchema } from './StoryUncheckedCreateWithoutChaptersInput.schema';
import { StoryCreateOrConnectWithoutChaptersInputObjectSchema } from './StoryCreateOrConnectWithoutChaptersInput.schema';
import { StoryUpsertWithoutChaptersInputObjectSchema } from './StoryUpsertWithoutChaptersInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutChaptersInputObjectSchema } from './StoryUpdateWithoutChaptersInput.schema';
import { StoryUncheckedUpdateWithoutChaptersInputObjectSchema } from './StoryUncheckedUpdateWithoutChaptersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutChaptersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutChaptersInputObjectSchema),
          z.lazy(() => StoryUncheckedCreateWithoutChaptersInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoryCreateOrConnectWithoutChaptersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StoryUpsertWithoutChaptersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoryUpdateWithoutChaptersInputObjectSchema),
          z.lazy(() => StoryUncheckedUpdateWithoutChaptersInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StoryUpdateOneRequiredWithoutChaptersNestedInputObjectSchema =
  Schema;
