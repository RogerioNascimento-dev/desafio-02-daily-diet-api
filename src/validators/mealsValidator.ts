import { z } from 'zod'

export const createMealRequest = z
  .object({
    name: z.string(),
    description: z.string().nullable(),
    date: z.string(),
    time: z.string(),
    is_diet: z.boolean(),
  })
  .partial()
  .strict()

export const updateMealRequest = z
  .object({
    name: z.string().nullable(),
    description: z.string().nullable(),
    date: z.string().nullable(),
    time: z.string().nullable(),
    is_diet: z.boolean().nullable(),
  })
  .partial()
  .strict()

export const listMealRequest = z
  .object({
    name: z.string().nullable(),
    description: z.string().nullable(),
  })
  .partial()

export const mealIdRequest = z.object({
  id: z.string().uuid(),
})

export type CreateMealRequest = z.infer<typeof createMealRequest>
export type ListMealRequest = z.infer<typeof listMealRequest>
export type UpdateMealRequest = z.infer<typeof updateMealRequest>
export type MealIdRequest = z.infer<typeof mealIdRequest>
