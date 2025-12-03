'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getAllSkills() {
  try {
    const payload = await getPayload({ config })

    const skills = await payload.find({
      collection: 'skills',
      sort: 'order', // Sort by order ascending
    })

    return skills.docs
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}
