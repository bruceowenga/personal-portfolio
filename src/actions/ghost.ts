'use server'

import { ghostClient, GhostPost } from '@/lib/ghost'

export async function getLatestPosts(limit: number = 3): Promise<GhostPost[]> {
  if (!ghostClient) {
    return []
  }

  try {
    const posts = await ghostClient.posts.browse({
      limit,
      include: ['tags', 'authors']
    })

    return posts as GhostPost[]
  } catch (error) {
    console.error('Error fetching Ghost posts:', error)
    return []
  }
}

export async function getAllPosts(): Promise<GhostPost[]> {
  if (!ghostClient) {
    return []
  }

  try {
    const posts = await ghostClient.posts.browse({
      limit: 'all',
      include: ['tags', 'authors']
    })

    return posts as GhostPost[]
  } catch (error) {
    console.error('Error fetching Ghost posts:', error)
    return []
  }
}
