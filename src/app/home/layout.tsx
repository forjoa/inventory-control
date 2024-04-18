import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store | Home',
  icons: '@/assets/favicon.ico'
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
