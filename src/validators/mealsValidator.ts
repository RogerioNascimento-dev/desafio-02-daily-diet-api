import { z } from 'zod'

export const createMealRequest = z.object({
  name: z.string(),
  description: z.string().nullable(),
  date: z.string(),
  time: z.string(),
  isDiet: z.boolean(),
})

export type CreateMealRequest = z.infer<typeof createMealRequest>
