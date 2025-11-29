'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getFeaturedProjects() {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'projects',
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 4,
  })

  return projects.docs
}

export async function getAllProjects() {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'projects',
  })

  return projects.docs
}

export async function getProjectBySlug(slug: string) {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  return projects.docs[0] || null
}
