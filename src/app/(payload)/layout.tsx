/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'

import config from '../../../payload.config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { ServerFunctionClient } from 'payload'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'
import { importMap } from './admin/importMap.js'

import './custom.scss'
import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Portfolio CMS Admin Panel',
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}

export default Layout
