import { FastifyRequest, FastifyReply } from 'fastify'
import {
  CreateMealRequest,
  createMealRequest,
} from '../validators/mealsValidator'
import { createOrFail } from '../services/mealsService'

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
