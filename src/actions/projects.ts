'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getFeaturedProjects() {
  try {
    const payload = await getPayload({ config })

    const projects = await payload.find({
      collection: 'projects',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: 'sortOrder', // ascending, lowest number first
      limit: 4,
    })

    return projects.docs
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

export async function getAllProjects() {
  try {
    const payload = await getPayload({ config })

    const projects = await payload.find({
      collection: 'projects',
      sort: 'sortOrder', // ascending, lowest number first
    })

    return projects.docs
  } catch (error) {
    console.error('Error fetching all projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  try {
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
  } catch (error) {
    console.error('Error fetching project by slug:', error)
    return null
  }
}
