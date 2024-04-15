import { Package2Icon } from '@/assets/icons'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import CartButton from '@/components/CartButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | Home',
}

export default function Layout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex flex-col min-h-[100dvh] max-w-[80dvw] mx-auto'>
          <header className='h-14 flex items-center px-4 md:px-6'>
            <div className='hidden md:flex items-center gap-4 lg:gap-6'>
              <Link
                className='flex items-center gap-2 font-semibold'
                href='/home'
              >
                <Package2Icon className='h-6 w-6' />
                <span className=''>Store</span>
              </Link>
            </div>
            <div className='w-full md:flex-1'>
              <form>
                <input
                  className='hidden md:w-[300px] lg:w-[400px] xl:w-[500px] md:flex md:ml-4 md:px-2 md:py-1 lg:ml-6 rounded-lg outline-none dark:text-black text-sm'
                  placeholder='Search products...'
                  type='search'
                />
              </form>
            </div>
            <div className='flex ml-auto lg:ml-0 items-center gap-4 lg:gap-6'>
              <Link
                className='hidden md:flex text-sm font-medium hover:underline underline-offset-4'
                href='#'
              >
                Login
              </Link>
              <Link
                className='hidden md:flex text-sm font-medium hover:underline underline-offset-4'
                href='#'
              >
                Register
              </Link>
              <CartButton />
            </div>
          </header>
          {children}
          <footer className='flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6'>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              © 2024 Store. All rights reserved.
            </p>
            <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
              <Link
                className='text-xs hover:underline underline-offset-4'
                href='#'
              >
                Terms of Service
              </Link>
              <Link
                className='text-xs hover:underline underline-offset-4'
                href='#'
              >
                Privacy
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  )
}
