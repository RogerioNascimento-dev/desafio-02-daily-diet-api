import { knex } from '../configs/database'
import { CreateMealRequest } from '../validators/mealsValidator'
import { randomUUID } from 'node:crypto'
import { userPayloadJwt } from './usersService'

export async function createOrFail(
  request: CreateMealRequest,
  authUser?: userPayloadJwt,
) {
  const user = await knex('users').select('*').where('id', authUser?.id).first()

  if (!user) throw new Error('User not found!')

  const createdMeal = await knex('meals')
    .insert({
      id: randomUUID(),
      fk_user_id: user.id,
      name: request.name,
      description: request.description,
      date: request.date,
      time: request.time,
      is_diet: request.isDiet,
    })
    .returning([
      'id',
      'fk_user_id',
      'name',
      'description',
      'date',
      'time',
      'is_diet',
    ])

  const bestSequence = request.isDiet ? user.best_sequence + 1 : 0

  await knex('users')
    .where({ id: user.id })
    .update({ best_sequence: bestSequence })

  return createdMeal[0]
}
