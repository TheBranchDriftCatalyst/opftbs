import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'username',
  'password',
  'email',
  'virtualAuthor',
  'createdAt',
  'loggedInAt',
]);
