import { FastifyInstance } from 'fastify'
import { create, list } from '../controllers/mealController'
import { authenticate } from '../middlewares/authenticate'

export async function mealRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [authenticate] }, create)
  app.get('/', { preHandler: [authenticate] }, list)
}
