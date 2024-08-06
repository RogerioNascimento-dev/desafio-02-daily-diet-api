import { FastifyRequest, FastifyReply } from 'fastify'
import {
  CreateMealRequest,
  createMealRequest,
  ListMealRequest,
  listMealRequest,
} from '../validators/mealsValidator'
import { createOrFail, listOrFail } from '../services/mealsService'

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
