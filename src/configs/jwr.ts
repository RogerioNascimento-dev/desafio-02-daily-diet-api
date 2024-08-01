import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from 'fastify'
export function jwtConfig(kernel: FastifyInstance) {
  return function jwt(
    request: FastifyRequest,
    reply: FastifyReply,
    next: HookHandlerDoneFunction,
  ) {
    request.jwt = kernel.jwt
    return next()
  }
}
