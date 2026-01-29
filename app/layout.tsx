import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SetPlay - Last Man Standing',
  description: 'Premier League Last Man Standing prediction leagues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
