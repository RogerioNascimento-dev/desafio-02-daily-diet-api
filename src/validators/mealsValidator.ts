import { z } from 'zod'

export const createMealRequest = z
  .object({
    name: z.string(),
    description: z.string().nullable(),
    date: z.string(),
    time: z.string(),
    isDiet: z.boolean(),
  })
  .partial()
  .strict()

export const listMealRequest = z
  .object({
    name: z.string().nullable(),
    description: z.string().nullable(),
  })
  .partial()

export type CreateMealRequest = z.infer<typeof createMealRequest>
export type ListMealRequest = z.infer<typeof listMealRequest>
