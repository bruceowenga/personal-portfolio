import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config.ts'

async function init() {
  try {
    console.log('Initializing Payload CMS...')
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'Set' : 'Not set')
    console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'Set' : 'Not set')

    const payload = await getPayload({ config })
    console.log('✓ Payload CMS initialized successfully!')
    console.log('✓ Database schema created/updated')
    process.exit(0)
  } catch (error) {
    console.error('Error initializing Payload:', error)
    process.exit(1)
  }
}

init()
