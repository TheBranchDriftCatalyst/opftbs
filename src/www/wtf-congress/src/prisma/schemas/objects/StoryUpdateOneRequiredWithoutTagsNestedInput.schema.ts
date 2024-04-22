import { z } from 'zod';
import { StoryCreateWithoutTagsInputObjectSchema } from './StoryCreateWithoutTagsInput.schema';
import { StoryUncheckedCreateWithoutTagsInputObjectSchema } from './StoryUncheckedCreateWithoutTagsInput.schema';
import { StoryCreateOrConnectWithoutTagsInputObjectSchema } from './StoryCreateOrConnectWithoutTagsInput.schema';
import { StoryUpsertWithoutTagsInputObjectSchema } from './StoryUpsertWithoutTagsInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutTagsInputObjectSchema } from './StoryUpdateWithoutTagsInput.schema';
import { StoryUncheckedUpdateWithoutTagsInputObjectSchema } from './StoryUncheckedUpdateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutTagsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => StoryCreateWithoutTagsInputObjectSchema),
        z.lazy(() => StoryUncheckedCreateWithoutTagsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => StoryCreateOrConnectWithoutTagsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => StoryUpsertWithoutTagsInputObjectSchema).optional(),
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => StoryUpdateWithoutTagsInputObjectSchema),
        z.lazy(() => StoryUncheckedUpdateWithoutTagsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const StoryUpdateOneRequiredWithoutTagsNestedInputObjectSchema = Schema;
