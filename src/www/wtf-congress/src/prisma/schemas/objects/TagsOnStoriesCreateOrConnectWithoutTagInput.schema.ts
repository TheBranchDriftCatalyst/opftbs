import { z } from 'zod';
import { TagsOnStoriesWhereUniqueInputObjectSchema } from './TagsOnStoriesWhereUniqueInput.schema';
import { TagsOnStoriesCreateWithoutTagInputObjectSchema } from './TagsOnStoriesCreateWithoutTagInput.schema';
import { TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema } from './TagsOnStoriesUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagsOnStoriesWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagsOnStoriesCreateWithoutTagInputObjectSchema),
      z.lazy(() => TagsOnStoriesUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagsOnStoriesCreateOrConnectWithoutTagInputObjectSchema = Schema;
