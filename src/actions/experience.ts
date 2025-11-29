'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getAllExperience() {
  const payload = await getPayload({ config })

  const experience = await payload.find({
    collection: 'experience',
    sort: '-order', // Sort by order descending (higher numbers first)
  })

  return experience.docs
}
