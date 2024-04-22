import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema';
import { StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagsOnStoriesOrderByWithRelationInput> = z
  .object({
    tagId: z.lazy(() => SortOrderSchema).optional(),
    storyId: z.lazy(() => SortOrderSchema).optional(),
    tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional(),
    story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const TagsOnStoriesOrderByWithRelationInputObjectSchema = Schema;
