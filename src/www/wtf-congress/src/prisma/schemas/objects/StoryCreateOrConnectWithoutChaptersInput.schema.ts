import { z } from 'zod';
import { StoryWhereUniqueInputObjectSchema } from './StoryWhereUniqueInput.schema';
import { StoryCreateWithoutChaptersInputObjectSchema } from './StoryCreateWithoutChaptersInput.schema';
import { StoryUncheckedCreateWithoutChaptersInputObjectSchema } from './StoryUncheckedCreateWithoutChaptersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StoryCreateOrConnectWithoutChaptersInput> = z
  .object({
    where: z.lazy(() => StoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => StoryCreateWithoutChaptersInputObjectSchema),
      z.lazy(() => StoryUncheckedCreateWithoutChaptersInputObjectSchema),
    ]),
  })
  .strict();

export const StoryCreateOrConnectWithoutChaptersInputObjectSchema = Schema;
