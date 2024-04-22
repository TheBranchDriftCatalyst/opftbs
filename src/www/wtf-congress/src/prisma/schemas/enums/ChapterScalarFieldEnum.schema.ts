import { z } from 'zod';

export const ChapterScalarFieldEnumSchema = z.enum([
  'index',
  'title',
  'content',
  'storyId',
]);
