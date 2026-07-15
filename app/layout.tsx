import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import { ImageTracker } from '@/components/utils/image-tracker'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Cottage Interior Decor & Building Maintenance',
  description: 'Cottage Interior Decor & Building Maintenance L.L.C. S.P.C. is an Abu Dhabi-based company delivering turnkey interior fit-out, renovation, civil works, MEP services, and facility maintenance for residential, commercial, retail, hospitality, government, and industrial sectors.',
  keywords: 'interior fit-out, building maintenance, renovation, civil works, MEP, gypsum, marble, painting, joinery, AMC, Abu Dhabi, UAE, Cottage',
  authors: [{ name: 'Cottage Interior Decor & Building Maintenance L.L.C. S.P.C.' }],
  openGraph: {
    title: 'Cottage Interior Decor & Building Maintenance',
    description: 'Spaces Transformed. Buildings Maintained. Turnkey fit-out, renovation, and facility maintenance across Abu Dhabi and the UAE.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cottage Interior Decor & Building Maintenance',
    description: 'Spaces Transformed. Buildings Maintained. Turnkey fit-out, renovation, and facility maintenance across Abu Dhabi and the UAE.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
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
        <ImageTracker />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
