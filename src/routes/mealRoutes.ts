import { FastifyInstance } from 'fastify'
import {
  create,
  list,
  update,
  find,
  deleteMeal,
  metrics,
} from '../controllers/mealController'
import { authenticate } from '../middlewares/authenticate'

export async function mealRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [authenticate] }, create)
  app.get('/', { preHandler: [authenticate] }, list)
  app.put('/:id', { preHandler: [authenticate] }, update)
  app.get('/:id', { preHandler: [authenticate] }, find)
  app.delete('/:id', { preHandler: [authenticate] }, deleteMeal)
  app.get('/metrics', { preHandler: [authenticate] }, metrics)
}
