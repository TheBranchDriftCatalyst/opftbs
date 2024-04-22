import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutTagsInputObjectSchema } from './StoryCreateWithoutTagsInput.schema';
import { StoryUncheckedCreateWithoutTagsInputObjectSchema } from './StoryUncheckedCreateWithoutTagsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutTagsInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const StoryCreateOrConnectWithoutTagsInputObjectSchema = Schema;
