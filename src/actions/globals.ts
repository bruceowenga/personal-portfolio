'use server'

import { getPayload } from 'payload'
import config from '../../payload.config'

export async function getSiteSettings() {
  const payload = await getPayload({ config })

  const siteSettings = await payload.findGlobal({
    slug: 'site-settings',
  })

  return siteSettings
}
