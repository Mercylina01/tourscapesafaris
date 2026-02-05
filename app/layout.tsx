import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TourScape Safaris | Premium Uganda Safari & Travel Experiences',
  description: 'Experience the magic of Uganda with TourScape Safaris. Luxury safari packages, guided tours, accommodation, and visa services for unforgettable African adventures.',
  generator: 'v0.app',
  openGraph: {
    title: 'TourScape Safaris | Premium Uganda Tourism',
    description: 'Discover Uganda\'s natural wonders with premium safari experiences, luxury accommodations, and professional travel services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
