import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'CanDoor Glass Partitions LLC',
  description: 'CanDoor Glass Partitions LLC delivers premium aluminium and glass fabrication and installation — curtain walls, structural glazing, partitions, and architectural systems — for government, commercial, and residential projects across the UAE.',
  keywords: 'aluminium and glass, curtain wall, structural glazing, glass partitions, cladding, Abu Dhabi, Musaffah, UAE, aluminium fabrication, CanDoor',
  authors: [{ name: 'CanDoor Glass Partitions LLC' }],
  openGraph: {
    title: 'CanDoor Glass Partitions LLC',
    description: 'Transparent Solutions. Stronger Spaces. Premium aluminium and glass fabrication and installation across the UAE.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CanDoor Glass Partitions LLC',
    description: 'Transparent Solutions. Stronger Spaces. Premium aluminium and glass fabrication and installation across the UAE.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fafaf8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
