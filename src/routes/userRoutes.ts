import { FastifyInstance } from 'fastify'
import { getUsers } from '../controllers/userController'

export async function userRoutes(app: FastifyInstance) {
  app.get('/', getUsers)
}
