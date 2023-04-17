import './globals.css'
import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Internationalization guide',
  description: 'Next.js 13: internationalization guide (i18n) with TypeScript'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
