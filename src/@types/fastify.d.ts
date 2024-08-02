// eslint-disable-next-line
import { JWT } from '@fastify/jwt'
import { userPayloadJwt } from '../services/usersService'

declare module 'fastify' {
  interface FastifyRequest {
    jwt: JWT
    authUser?: userPayloadJwt
  }
}
