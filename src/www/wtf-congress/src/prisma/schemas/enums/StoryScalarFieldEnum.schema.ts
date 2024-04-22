import { z } from 'zod';

export const StoryScalarFieldEnumSchema = z.enum([
  'id',
  'uuid',
  'title',
  'summary',
  'authorId',
  'createdAt',
  'statsId',
]);
