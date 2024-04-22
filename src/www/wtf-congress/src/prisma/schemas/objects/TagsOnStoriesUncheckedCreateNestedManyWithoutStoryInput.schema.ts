import { z } from 'zod';
import { TagsOnStoriesCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateWithoutStoryInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutStoryInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutStoryInput.schema';
import { TagsOnStoriesCreateOrConnectWithoutStoryInputObjectSchema } from './TagsOnStoriesCreateOrConnectWithoutStoryInput.schema';
import { TagsOnStoriesCreateManyStoryInputEnvelopeObjectSchema } from './TagsOnStoriesCreateManyStoryInputEnvelope.schema';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInput> =
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
      createMany: z
        .lazy(() => TagsOnStoriesCreateManyStoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
          z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagsOnStoriesUncheckedCreateNestedManyWithoutStoryInputObjectSchema =
  Schema;
