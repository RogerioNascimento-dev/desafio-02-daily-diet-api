import { config } from 'dotenv'
import { envValidator } from '../validators/envValidator'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const _env = envValidator.safeParse(process.env)

if (_env.success === false) {
  const errorMessage = '❌ Invalid environment variables!'
  console.error(errorMessage, _env.error.format())
  throw new Error(errorMessage)
}

export const env = _env.data
