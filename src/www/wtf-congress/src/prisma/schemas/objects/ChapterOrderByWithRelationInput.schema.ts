import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChapterOrderByWithRelationInput> = z
  .object({
    index: z.lazy(() => SortOrderSchema).optional(),
    title: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    Story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ChapterOrderByWithRelationInputObjectSchema = Schema;
