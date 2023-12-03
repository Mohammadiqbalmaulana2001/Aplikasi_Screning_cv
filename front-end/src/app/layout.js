'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/app/(components)/Footer'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

const inter = Inter({ subsets: ['latin'] })

const disable = ['/minQ']


export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en" className='!scroll-smooth bg-sky-300'>
      <head>
        <title>SkillQ</title>
      </head>
      <body className={inter.className}>
        <main>
          {!disable.includes(pathname) && <Navbar />}
            {children}
          {!disable.includes(pathname) && <Footer />}
        </main>
      </body>
    </html>
  )
}
