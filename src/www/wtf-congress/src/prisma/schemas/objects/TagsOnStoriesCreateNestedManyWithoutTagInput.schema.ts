import { z } from 'zod';
import { TagsOnStoriesCreateWithoutTagInputObjectSchema } from './TagsOnStoriesCreateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutTagInput.schema';
import { TagsOnStoriesCreateOrConnectWithoutTagInputObjectSchema } from './TagsOnStoriesCreateOrConnectWithoutTagInput.schema';
import { TagsOnStoriesCreateManyTagInputEnvelopeObjectSchema } from './TagsOnStoriesCreateManyTagInputEnvelope.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateNestedManyWithoutTagInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagsOnStoriesCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagsOnStoriesCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema),
        z
          .lazy(() => TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagsOnStoriesCreateOrConnectWithoutTagInputObjectSchema),
        z
          .lazy(() => TagsOnStoriesCreateOrConnectWithoutTagInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagsOnStoriesCreateManyTagInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
        z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagsOnStoriesCreateNestedManyWithoutTagInputObjectSchema = Schema;
