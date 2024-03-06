import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Package2Icon } from '@/assets/icons'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className + ' grid min-h-screen w-full lg:grid-cols-[280px_1fr]'}>
        <div className='hidden border border-slate-600 bg-gray-100/40 lg:block dark:bg-gray-800/40 ml-5 my-5 rounded-lg'>
          <div className='flex h-full max-h-screen flex-col gap-2'>
            <div className='flex h-[60px] items-center border-b border-slate-600 px-6'>
              <Link className='flex items-center gap-2 font-semibold' href='/'>
                <Package2Icon className='h-6 w-6' />
                <span>Store</span>
              </Link>
            </div>
            <Navigation />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
