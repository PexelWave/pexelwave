import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ weight: ["400", "500", "700", "900"], subsets: ["devanagari"] })

export const metadata: Metadata = {
  title: 'PEXEL WAVE | WEB DEVELOPMENT AGENCY',
  description: 'Creating Stunning Websites and Innovative Solutions to meet your business needs and identity',
  creator: 'PEXELWAVE',
  authors: [{ name: 'Perfect Nkosi', url: 'https://github.com/PNkosi' }],
  formatDetection: {telephone: true, email: true},
  keywords: ["Web design", "Web development", "SEO", "Digital Marketing", "Graphic Design", "Logo Design"],
  robots: "index, services, portfolio",
  themeColor: '#5a08b8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Poppins' }} className={`${poppins.className} bg-purple scroll-smooth`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
