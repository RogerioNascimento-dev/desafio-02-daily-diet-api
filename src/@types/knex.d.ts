// eslint-disable-next-line
import { Knex } from 'knex'
// eslint-disable-next-line
import { JWT } from '@fastify/jwt'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      first_name: string
      last_name: ?string
      email: string
      password: string
      created_at: string
    }
  }
}
declare module 'fastify' {
  interface FastifyRequest {
    jwt: JWT
  }
}
