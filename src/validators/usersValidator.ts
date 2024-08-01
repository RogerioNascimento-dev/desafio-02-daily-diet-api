import { z } from 'zod'

export const registerRequest = z.object({
  firstName: z.string(),
  lastName: z.string().nullable(),
  email: z.string().email(),
  password: z.string(),
})

export type RegisterRequest = z.infer<typeof registerRequest>
