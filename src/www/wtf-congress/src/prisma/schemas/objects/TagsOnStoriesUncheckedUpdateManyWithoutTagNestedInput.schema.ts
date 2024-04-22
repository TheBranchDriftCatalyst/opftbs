import { z } from 'zod';
import { TagsOnStoriesCreateWithoutTagInputObjectSchema } from './TagsOnStoriesCreateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutTagInput.schema';
import { TagsOnStoriesCreateOrConnectWithoutTagInputObjectSchema } from './TagsOnStoriesCreateOrConnectWithoutTagInput.schema';
import { TagsOnStoriesUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './TagsOnStoriesUpsertWithWhereUniqueWithoutTagInput.schema';
import { TagsOnStoriesCreateManyTagInputEnvelopeObjectSchema } from './TagsOnStoriesCreateManyTagInputEnvelope.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './TagsOnStoriesUpdateWithWhereUniqueWithoutTagInput.schema';
import { TagsOnStoriesUpdateManyWithWhereWithoutTagInputObjectSchema } from './TagsOnStoriesUpdateManyWithWhereWithoutTagInput.schema';
import { TagsOnStoriesScalarWhereInputObjectSchema } from './TagsOnStoriesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedUpdateManyWithoutTagNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(
            () => TagsOnStoriesUpsertWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TagsOnStoriesUpsertWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagsOnStoriesCreateManyTagInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => TagsOnStoriesUpdateWithWhereUniqueWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TagsOnStoriesUpdateWithWhereUniqueWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TagsOnStoriesUpdateManyWithWhereWithoutTagInputObjectSchema,
          ),
          z
            .lazy(
              () => TagsOnStoriesUpdateManyWithWhereWithoutTagInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema),
          z.lazy(() => TagsOnStoriesScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagsOnStoriesUncheckedUpdateManyWithoutTagNestedInputObjectSchema =
  Schema;
