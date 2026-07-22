import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Sakshi Bane | Software Engineer & Developer',
  description: 'Portfolio of Sakshi Bane — Software Engineer specializing in Flutter, YOLOv8 Edge AI, PHP/MySQL web platforms, and real-time systems.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/portfolio/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/portfolio/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/portfolio/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/portfolio/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
