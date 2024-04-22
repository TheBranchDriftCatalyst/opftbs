import { z } from 'zod';
import { StoryCreateWithoutReviewsInputObjectSchema } from './StoryCreateWithoutReviewsInput.schema';
import { StoryUncheckedCreateWithoutReviewsInputObjectSchema } from './StoryUncheckedCreateWithoutReviewsInput.schema';
import { StoryCreateOrConnectWithoutReviewsInputObjectSchema } from './StoryCreateOrConnectWithoutReviewsInput.schema';
import { StoryUpsertWithoutReviewsInputObjectSchema } from './StoryUpsertWithoutReviewsInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryUpdateWithoutReviewsInputObjectSchema } from './StoryUpdateWithoutReviewsInput.schema';
import { StoryUncheckedUpdateWithoutReviewsInputObjectSchema } from './StoryUncheckedUpdateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateOneRequiredWithoutReviewsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutReviewsInputObjectSchema),
          z.lazy(() => StoryUncheckedCreateWithoutReviewsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoryCreateOrConnectWithoutReviewsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => StoryUpsertWithoutReviewsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoryUpdateWithoutReviewsInputObjectSchema),
          z.lazy(() => StoryUncheckedUpdateWithoutReviewsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const StoryUpdateOneRequiredWithoutReviewsNestedInputObjectSchema =
  Schema;
