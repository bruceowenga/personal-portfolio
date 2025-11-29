import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: 'https://blog.brucembudi.dev',
  key: process.env.GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
})

export interface GhostPost {
  id: string
  title: string
  slug: string
  excerpt: string
  feature_image: string | null
  published_at: string
  url: string
  reading_time: number
  tags?: Array<{
    name: string
    slug: string
  }>
}
