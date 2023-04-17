import '../../styles/globals.css'
import React, { ReactNode } from 'react'
import { languages } from '@/app/i18n/settings'
import { dir } from 'i18next'
import LayoutBase from '@/app/[lng]/components/LayoutBase'

export const metadata = {
  title: 'Internationalization guide',
  description: 'Next.js 13: internationalization guide (i18n) with TypeScript'
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }: { children: ReactNode; params: any }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <LayoutBase lng={lng} children={children} />
      </body>
    </html>
  )
}
