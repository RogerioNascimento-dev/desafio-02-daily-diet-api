import { FastifyRequest, FastifyReply } from 'fastify'

export const getUsers = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  reply.send({ success: 'TRUE S2 getUsers' })
}
