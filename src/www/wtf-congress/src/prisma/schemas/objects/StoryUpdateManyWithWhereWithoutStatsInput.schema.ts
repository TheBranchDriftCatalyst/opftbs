import { z } from 'zod';
import { StoryScalarWhereInputObjectSchema } from './StoryScalarWhereInput.schema';
import { StoryUpdateManyMutationInputObjectSchema } from './StoryUpdateManyMutationInput.schema';
import { StoryUncheckedUpdateManyWithoutStoryInputObjectSchema } from './StoryUncheckedUpdateManyWithoutStoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryUpdateManyWithWhereWithoutStatsInput> = z
  .object({
    where: z.lazy(() => StoryScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => StoryUpdateManyMutationInputObjectSchema),
      z.lazy(() => StoryUncheckedUpdateManyWithoutStoryInputObjectSchema),
    ]),
  })
  .strict();

export const StoryUpdateManyWithWhereWithoutStatsInputObjectSchema = Schema;
