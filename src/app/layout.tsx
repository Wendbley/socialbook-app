import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'],
weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', 'variable'],
display: 'swap', })
// const poppins = Poppins({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialBook App',
  description: 'Social book to hep people connected with one another',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
