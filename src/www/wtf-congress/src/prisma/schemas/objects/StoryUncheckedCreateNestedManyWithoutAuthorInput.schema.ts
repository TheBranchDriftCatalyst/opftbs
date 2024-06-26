import { z } from 'zod';
import { StoryCreateWithoutAuthorInputObjectSchema } from './StoryCreateWithoutAuthorInput.schema';
import { StoryUncheckedCreateWithoutAuthorInputObjectSchema } from './StoryUncheckedCreateWithoutAuthorInput.schema';
import { StoryCreateOrConnectWithoutAuthorInputObjectSchema } from './StoryCreateOrConnectWithoutAuthorInput.schema';
import { StoryCreateManyAuthorInputEnvelopeObjectSchema } from './StoryCreateManyAuthorInputEnvelope.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUncheckedCreateNestedManyWithoutAuthorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema),
          z.lazy(() => StoryCreateWithoutAuthorInputObjectSchema).array(),
          z.lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema),
          z
            .lazy(() => StoryUncheckedCreateWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema),
          z
            .lazy(() => StoryCreateOrConnectWithoutAuthorInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoryCreateManyAuthorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoryWhereUniqueInputObjectSchema),
          z.lazy(() => StoryWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StoryUncheckedCreateNestedManyWithoutAuthorInputObjectSchema =
  Schema;
