import { z } from 'zod';
import { StoryCreateWithoutChaptersInputObjectSchema } from './StoryCreateWithoutChaptersInput.schema';
import { StoryUncheckedCreateWithoutChaptersInputObjectSchema } from './StoryUncheckedCreateWithoutChaptersInput.schema';
import { StoryCreateOrConnectWithoutChaptersInputObjectSchema } from './StoryCreateOrConnectWithoutChaptersInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutChaptersInput> = z
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
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StoryCreateNestedOneWithoutChaptersInputObjectSchema = Schema;
