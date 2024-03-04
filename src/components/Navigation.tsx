'use client'
import Link from 'next/link'
import {
  HomeIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from '@/assets/icons'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const router = usePathname()

  return (
    <div className='flex-1 overflow-auto py-2'>
      <nav className='grid items-start px-4 text-sm font-medium'>
        <Link
          className={`${
            router == '/'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/'
        >
          <HomeIcon className='h-4 w-4' />
          Home
        </Link>
        <Link
          className={`${
            router == '/orders'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/orders'
        >
          <ShoppingCartIcon className='h-4 w-4' />
          Orders
        </Link>
        <Link
          className={`${
            router == '/products'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/products'
        >
          <PackageIcon className='h-4 w-4' />
          Products
        </Link>
        <Link
          className={`${
            router == '/costumers'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/costumers'
        >
          <UsersIcon className='h-4 w-4' />
          Customers
        </Link>
        <Link
          className={`${
            router == '/inventory'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/inventory'
        >
          <PackageIcon className='h-4 w-4' />
          Inventory
        </Link>
      </nav>
    </div>
  )
}
