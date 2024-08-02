import { FastifyRequest, FastifyReply } from 'fastify'
import {
  LoginRequest,
  loginRequest,
  RegisterRequest,
  registerRequest,
} from '../validators/usersValidator'
import { registerOrFail, loginOrFail } from '../services/usersService'

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const body = registerRequest.parse(request.body) as RegisterRequest
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
    const body = loginRequest.parse(request.body) as LoginRequest
    const payload = await loginOrFail(body)

    const token = request.jwt.sign(payload)

    reply.cookie('access_token', token, {
      path: '/',
      maxAge: 60 * 60 * 24, // 4 hours
      httpOnly: true,
      secure: true,
    })

    return reply.status(200).send({ access_token: token })
  } catch (e) {
    if (e instanceof Error)
      return reply.status(401).send({ message: e.message })

    return reply.status(401).send({ message: 'An unknown error occurred' })
  }
}

export const logout = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.clearCookie('access_token')
  return reply.send({ message: 'Logout successful' })
}
