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
      best_sequence: number
      created_at: string
    }
    meals: {
      id: string
      fk_user_id: string
      name: string
      description: ?string
      date: string
      time: string
      is_diet: boolean
    }
  }
}
