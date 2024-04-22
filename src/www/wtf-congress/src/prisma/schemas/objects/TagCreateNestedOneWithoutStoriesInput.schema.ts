import { z } from 'zod';
import { TagCreateWithoutStoriesInputObjectSchema } from './TagCreateWithoutStoriesInput.schema';
import { TagUncheckedCreateWithoutStoriesInputObjectSchema } from './TagUncheckedCreateWithoutStoriesInput.schema';
import { TagCreateOrConnectWithoutStoriesInputObjectSchema } from './TagCreateOrConnectWithoutStoriesInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutStoriesInput> = z
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
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateNestedOneWithoutStoriesInputObjectSchema = Schema;
