import { z } from 'zod';

export const newsletterEmailSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Enter an email address',
    })
    .email('Enter a valid email address'),
});
