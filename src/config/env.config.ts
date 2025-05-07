import { z } from 'zod';

const envSchema = z.object({
  VITE_BASE_API_URL: z.string(),
  VITE_PORT: z.coerce.number().min(1000),
});

export const env = envSchema.parse(import.meta.env);
