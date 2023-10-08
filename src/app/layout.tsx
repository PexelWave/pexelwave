import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["400", "500", "700", "900"], subsets: ["devanagari"] })

export const metadata: Metadata = {
  title: 'PEXEL WAVE',
  description: 'Creating Stunning Websites and Innovative Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-purple`}>
        <Navbar />
        {children}</body>
    </html>
  )
}
