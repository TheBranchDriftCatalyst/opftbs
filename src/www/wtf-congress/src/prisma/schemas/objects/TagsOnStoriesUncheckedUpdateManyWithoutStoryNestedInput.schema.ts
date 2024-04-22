import { z } from 'zod';
import { TagsOnStoriesCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutStoryInput.schema';
import { TagsOnStoriesCreateOrConnectWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateOrConnectWithoutStoryInput.schema';
import { TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInputObjectSchema } from './TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInput.schema';
import { TagsOnStoriesCreateManyStoryInputEnvelopeObjectSchema } from './TagsOnStoriesCreateManyStoryInputEnvelope.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInputObjectSchema } from './TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInput.schema';
import { TagsOnStoriesUpdateManyWithWhereWithoutStoryInputObjectSchema } from './TagsOnStoriesUpdateManyWithWhereWithoutStoryInput.schema';
import { TagsOnStoriesScalarWhereInputObjectSchema } from './TagsOnStoriesScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedUpdateManyWithoutStoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagsOnStoriesCreateWithoutStoryInputObjectSchema),
          z
            .lazy(() => TagsOnStoriesCreateWithoutStoryInputObjectSchema)
            .array(),
          z.lazy(
            () => TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () => TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TagsOnStoriesCreateOrConnectWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () => TagsOnStoriesCreateOrConnectWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TagsOnStoriesUpsertWithWhereUniqueWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagsOnStoriesCreateManyStoryInputEnvelopeObjectSchema)
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
            () =>
              TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TagsOnStoriesUpdateWithWhereUniqueWithoutStoryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TagsOnStoriesUpdateManyWithWhereWithoutStoryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TagsOnStoriesUpdateManyWithWhereWithoutStoryInputObjectSchema,
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

export const TagsOnStoriesUncheckedUpdateManyWithoutStoryNestedInputObjectSchema =
  Schema;
