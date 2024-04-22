import { z } from 'zod';
import { ChapterCreateManyInputObjectSchema } from './objects/ChapterCreateManyInput.schema';

export const ChapterCreateManySchema = z.object({
  data: z.union([
    ChapterCreateManyInputObjectSchema,
    z.array(ChapterCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
