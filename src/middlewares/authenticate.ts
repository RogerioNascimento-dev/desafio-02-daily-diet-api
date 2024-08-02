import { FastifyRequest, FastifyReply } from 'fastify'

export const authenticate = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const token = request.cookies.access_token

  if (!token)
    return reply
      .status(401)
      .send({ message: 'Unauthorized, authentication required.' })
}
