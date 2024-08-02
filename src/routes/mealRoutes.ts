import { FastifyInstance } from 'fastify'
import { create } from '../controllers/mealController'
import { authenticate } from '../middlewares/authenticate'

export async function mealRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [authenticate] }, create)
}
