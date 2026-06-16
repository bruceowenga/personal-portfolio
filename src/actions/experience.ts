'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getAllExperience() {
  try {
    const payload = await getPayload({ config })

    const experience = await payload.find({
      collection: 'experience',
      sort: 'order', // order=1 is most recent (TSAVO), ascending = newest first
    })

    return experience.docs
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}
