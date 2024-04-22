import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum([
  'id',
  'storyId',
  'userId',
  'content',
]);
