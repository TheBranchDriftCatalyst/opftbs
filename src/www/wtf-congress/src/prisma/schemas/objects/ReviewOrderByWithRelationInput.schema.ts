import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    Story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
    author: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ReviewOrderByWithRelationInputObjectSchema = Schema;
