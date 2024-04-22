import { z } from 'zod';
import { TagCreateWithoutStoriesInputObjectSchema } from './TagCreateWithoutStoriesInput.schema';
import { TagUncheckedCreateWithoutStoriesInputObjectSchema } from './TagUncheckedCreateWithoutStoriesInput.schema';
import { TagCreateOrConnectWithoutStoriesInputObjectSchema } from './TagCreateOrConnectWithoutStoriesInput.schema';
import { TagUpsertWithoutStoriesInputObjectSchema } from './TagUpsertWithoutStoriesInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutStoriesInputObjectSchema } from './TagUpdateWithoutStoriesInput.schema';
import { TagUncheckedUpdateWithoutStoriesInputObjectSchema } from './TagUncheckedUpdateWithoutStoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutStoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagCreateWithoutStoriesInputObjectSchema),
          z.lazy(() => TagUncheckedCreateWithoutStoriesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TagCreateOrConnectWithoutStoriesInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => TagUpsertWithoutStoriesInputObjectSchema).optional(),
      connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TagUpdateWithoutStoriesInputObjectSchema),
          z.lazy(() => TagUncheckedUpdateWithoutStoriesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const TagUpdateOneRequiredWithoutStoriesNestedInputObjectSchema = Schema;
