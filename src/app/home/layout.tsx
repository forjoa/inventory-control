import { Package2Icon } from '@/assets/icons'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import CartButton from '@/components/CartButton'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
            <Footer />
          </div>
        </body>
      </html>
    </CartProvider>
  )
}
