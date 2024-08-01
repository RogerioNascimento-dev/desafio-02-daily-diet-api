import { z } from 'zod'

export const envValidator = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(['pg', 'sqlite']).default('sqlite'),
  PORT: z.coerce.number().default(3333),
})
