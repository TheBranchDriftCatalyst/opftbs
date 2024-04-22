import { z } from 'zod';
import { StoryCreateWithoutTagsInputObjectSchema } from './StoryCreateWithoutTagsInput.schema';
import { StoryUncheckedCreateWithoutTagsInputObjectSchema } from './StoryUncheckedCreateWithoutTagsInput.schema';
import { StoryCreateOrConnectWithoutTagsInputObjectSchema } from './StoryCreateOrConnectWithoutTagsInput.schema';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateNestedOneWithoutTagsInput> = z
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
    connect: z.lazy(() => StoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const StoryCreateNestedOneWithoutTagsInputObjectSchema = Schema;
