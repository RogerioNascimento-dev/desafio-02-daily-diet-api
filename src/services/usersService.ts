import { knex } from '../configs/database'
import { RegisterRequest } from '../validators/usersValidator'
import bcrypt from 'bcrypt'
import { randomUUID } from 'node:crypto'
const SALT_ROUNDS = 10

export async function registerOrFail(payload: RegisterRequest) {
  const user = await knex('users')
    .where({ email: payload.email })
    .select()
    .first()

  if (user) throw new Error('E-mail already registred!')

  const passwordHash = bcrypt.hashSync(payload.password, SALT_ROUNDS)

  const createdUser = await knex('users')
    .insert({
      id: randomUUID(),
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      password: passwordHash,
    })
    .returning(['id', 'first_name', 'last_name', 'email'])

  return createdUser[0]
}
