// eslint-disable-next-line
import { Knex } from 'knex'

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
