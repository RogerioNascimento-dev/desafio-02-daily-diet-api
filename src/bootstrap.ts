import { kernel } from './kernel'
import { env } from './env'

kernel.listen({ port: env.PORT, host: '0.0.0.0' })

console.log(`🚀 Server is running on port: ${env.PORT}.`)
