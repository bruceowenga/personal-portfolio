'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getAllSkills() {
  const payload = await getPayload({ config })

  const skills = await payload.find({
    collection: 'skills',
    sort: 'order', // Sort by order ascending
  })

  return skills.docs
}
