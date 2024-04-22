import { z } from 'zod';
import { StoryCreateWithoutReviewsInputObjectSchema } from './StoryCreateWithoutReviewsInput.schema';
import { StoryUncheckedCreateWithoutReviewsInputObjectSchema } from './StoryUncheckedCreateWithoutReviewsInput.schema';
import { StoryCreateOrConnectWithoutReviewsInputObjectSchema } from './StoryCreateOrConnectWithoutReviewsInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutReviewsInput> = z
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
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StoryCreateNestedOneWithoutReviewsInputObjectSchema = Schema;
