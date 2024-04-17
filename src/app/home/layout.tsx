import { Package2Icon } from '@/assets/icons'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import CartButton from '@/components/CartButton'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | Home',
}

export default function Layout({ children }: { children: any }) {
  return (
    <CartProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='flex flex-col min-h-[100dvh] max-w-[80dvw] mx-auto'>
            <Header />
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
    </CartProvider>
  )
}
