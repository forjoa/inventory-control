'use client'
import Link from 'next/link'
import {
  HomeIcon,
  Logout,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from '@/assets/icons'
import { usePathname } from 'next/navigation'
import { signOut } from '@/utils/functions'

export default function Navigation() {
  const router = usePathname()

  return (
    <div className='flex flex-col h-full overflow-auto py-2 justify-between'>
      <nav className='grid items-start px-4 text-sm font-medium'>
        <Link
          className={`${
            router == '/dashboard'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/dashboard'
        >
          <HomeIcon className='h-4 w-4' />
          Home
        </Link>
        <Link
          className={`${
            router == '/dashboard/orders'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/dashboard/orders'
        >
          <ShoppingCartIcon className='h-4 w-4' />
          Orders
        </Link>
        <Link
          className={`${
            router == '/dashboard/costumers'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/dashboard/costumers'
        >
          <UsersIcon className='h-4 w-4' />
          Customers
        </Link>
        <Link
          className={`${
            router == '/dashboard/inventory'
              ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-400'
          } flex items-center gap-3 rounded-lg px-3 py-2 transition-all dark:hover:text-gray-50`}
          href='/dashboard/inventory'
        >
          <PackageIcon className='h-4 w-4' />
          Inventory
        </Link>
      </nav>
      <button className='flex gap-1 mx-4 px-2 py-2 border bg-red-500 text-white dark:border-red-800 rounded dark:bg-red-800 dark:bg-opacity-50  dark:text-red-500' onClick={signOut}>
        <Logout className='h-4 w-4' />
        <p>Log out</p>
      </button>
    </div>
  )
}
