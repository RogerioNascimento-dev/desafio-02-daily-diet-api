import { FastifyRequest, FastifyReply } from 'fastify'
import {
  CreateMealRequest,
  createMealRequest,
  ListMealRequest,
  listMealRequest,
  MealIdRequest,
  mealIdRequest,
  updateMealRequest,
  UpdateMealRequest,
} from '../validators/mealsValidator'
import {
  createOrFail,
  listOrFail,
  updateOrFail,
  findOrFail,
  deleteOrFail,
  getMetricsOrFail,
} from '../services/mealsService'

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const body = createMealRequest.parse(request.body) as CreateMealRequest
    const authUser = request.authUser

    const meal = await createOrFail(body, authUser)

    return reply.status(201).send({ meal })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}

export const list = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authUser = request.authUser
    const queryParams: ListMealRequest = listMealRequest.parse(request.query)

    const meals = await listOrFail(queryParams, authUser)

    return reply.status(200).send({ meals })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}

export const update = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authUser = request.authUser
    const payload: UpdateMealRequest = updateMealRequest.parse(request.body)
    const { id: mealId }: MealIdRequest = mealIdRequest.parse(request.params)

    await updateOrFail(mealId, payload, authUser)

    return reply.status(200).send({ message: 'Updated success!' })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}
export const find = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authUser = request.authUser
    const { id: mealId }: MealIdRequest = mealIdRequest.parse(request.params)

    const meal = await findOrFail(mealId, authUser)

    return reply.status(200).send({ meal })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}

export const deleteMeal = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const authUser = request.authUser
    const { id: mealId }: MealIdRequest = mealIdRequest.parse(request.params)

    await deleteOrFail(mealId, authUser)

    return reply.status(200).send('Delete success!')
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}

export const metrics = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authUser = request.authUser

    const metrics = await getMetricsOrFail(authUser)

    return reply.status(200).send({ metrics })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}
