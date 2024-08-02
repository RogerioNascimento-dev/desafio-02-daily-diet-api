import { knex } from '../configs/database'
import { LoginRequest, RegisterRequest } from '../validators/usersValidator'
import bcrypt from 'bcrypt'
import { randomUUID } from 'node:crypto'
const SALT_ROUNDS = 10

export interface userPayloadJwt {
  id: string
  email: string
  name: string
}

export async function registerOrFail(request: RegisterRequest) {
  const user = await knex('users')
    .where({ email: request.email })
    .select()
    .first()

  if (user) throw new Error('E-mail already registred!')

  const passwordHash = bcrypt.hashSync(request.password, SALT_ROUNDS)

  const createdUser = await knex('users')
    .insert({
      id: randomUUID(),
      first_name: request.firstName,
      last_name: request.lastName,
      email: request.email,
      password: passwordHash,
    })
    .returning(['id', 'first_name', 'last_name', 'email'])

  return createdUser[0]
}

export const loginOrFail = async (
  request: LoginRequest,
): Promise<userPayloadJwt> => {
  const user = await knex('users')
    .where({ email: request.email })
    .select()
    .first()

  if (!user) throw new Error('Invalid email or password!')

  const passwordIsCorrect = await bcrypt.compare(
    request.password,
    user.password,
  )
  if (!passwordIsCorrect) throw new Error('Invalid email or password!')

  return { id: user.id, email: user.email, name: user.first_name }
}
