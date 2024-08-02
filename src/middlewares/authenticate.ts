import { FastifyRequest, FastifyReply } from 'fastify'
import { userPayloadJwt } from '../services/usersService'

export const authenticate = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const token = request.cookies.access_token

  if (!token)
    return reply
      .status(401)
      .send({ message: 'Unauthorized, authentication required.' })

  request.authUser = request.jwt.verify(token) as userPayloadJwt
}
