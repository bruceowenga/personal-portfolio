import { getPayload } from 'payload'
import config from '../payload.config.ts'

async function init() {
  try {
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'Set' : 'Not set')
    console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Set' : 'Not set')
    console.log('NODE_ENV:', process.env.NODE_ENV)

    // Resolve the config promise from buildConfig()
    const resolvedConfig = await config
    console.log('Config secret present:', !!resolvedConfig?.secret)

    const payload = await getPayload({ config })
    console.log('Payload CMS initialized - database schema pushed')
    process.exit(0)
  } catch (error) {
    console.error('Error initializing Payload:', error.message)
    process.exit(1)
  }
}

init()
