import { FastifyRequest, FastifyReply } from 'fastify'
import { loginRequest, registerRequest } from '../validators/usersValidator'
import { registerOrFail, loginOrFail } from '../services/usersService'

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const body = registerRequest.parse(request.body)
    const user = await registerOrFail(body)

    return reply.status(201).send({ user })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const body = loginRequest.parse(request.body)
    await loginOrFail(body)
    return reply.status(200).send({ success: 'login' })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(400).send({ message: e.message })

    return reply.status(500).send({ message: 'An unknown error occurred' })
  }
}
