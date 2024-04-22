import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutStoriesInputObjectSchema } from './TagCreateWithoutStoriesInput.schema';
import { TagUncheckedCreateWithoutStoriesInputObjectSchema } from './TagUncheckedCreateWithoutStoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutStoriesInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutStoriesInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutStoriesInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutStoriesInputObjectSchema = Schema;
