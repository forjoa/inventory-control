import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  return (
    <>
      <div className='hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-[60px] items-center border-b px-6'>
            <Link className='flex items-center gap-2 font-semibold' href='#'>
              <Package2Icon className='h-6 w-6' />
              <span className=''>Acme Inc</span>
            </Link>
            <button className='ml-auto h-8 w-8'>
              <BellIcon className='h-4 w-4' />
              <span className='sr-only'>Toggle notifications</span>
            </button>
          </div>
          <div className='flex-1 overflow-auto py-2'>
            <nav className='grid items-start px-4 text-sm font-medium'>
              <Link
                className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                href='#'
              >
                <HomeIcon className='h-4 w-4' />
                Home
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <ShoppingCartIcon className='h-4 w-4' />
                Orders
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <PackageIcon className='h-4 w-4' />
                Products
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                href='#'
              >
                <UsersIcon className='h-4 w-4' />
                Customers
              </Link>
              <Link
                className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'
                href='#'
              >
                <PackageIcon className='h-4 w-4' />
                Inventory
              </Link>
            </nav>
          </div>
          <div className='mt-auto p-4'>
            <div>
              <div className='pb-4'>
                <div>Upgrade to Pro</div>
                <div>
                  Unlock all features and get unlimited access to our support
                  team
                </div>
              </div>
              <div>
                <button className='w-full'>Upgrade</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          <Link className='lg:hidden' href='#'>
            <Package2Icon className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <div className='flex-1'>
            <form>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <input
                  className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
                  placeholder='Search products...'
                  type='search'
                />
              </div>
            </form>
          </div>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
          <div className='flex items-center'>
            <h1 className='font-semibold text-lg md:text-2xl'>Inventory</h1>
            <button className='ml-auto'>Add product</button>
          </div>
          <div className='border rounded-lg'>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th className='hidden md:table-cell'>Status</th>
                  <th className='hidden md:table-cell'>Inventory</th>
                  <th>Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src='/placeholder.svg'
                      width='64'
                    />
                  </td>
                  <td className='font-medium'>Glimmer Lamps</td>
                  <td className='hidden md:table-cell'>In Production</td>
                  <td>500 in stock</td>
                  <td className='hidden md:table-cell'>Luminance Creations</td>
                </tr>
                <tr>
                  <td>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src='/placeholder.svg'
                      width='64'
                    />
                  </td>
                  <td className='font-medium'>Aqua Filters</td>
                  <td className='hidden md:table-cell'>Available for Order</td>
                  <td>750 in stock</td>
                  <td className='hidden md:table-cell'>HydraClean Solutions</td>
                </tr>
                <tr>
                  <td>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src='/placeholder.svg'
                      width='64'
                    />
                  </td>
                  <td className='font-medium'>Eco Planters</td>
                  <td className='hidden md:table-cell'>Backordered</td>
                  <td>300 in stock</td>
                  <td className='hidden md:table-cell'>
                    GreenGrowth Designers
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src='/placeholder.svg'
                      width='64'
                    />
                  </td>
                  <td className='font-medium'>Zest Juicers</td>
                  <td className='hidden md:table-cell'>Newly Launched</td>
                  <td>1000 in stock</td>
                  <td className='hidden md:table-cell'>FreshTech Appliances</td>
                </tr>
                <tr>
                  <td>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src='/placeholder.svg'
                      width='64'
                    />
                  </td>
                  <td className='font-medium'>Flexi Wearables</td>
                  <td className='hidden md:table-cell'>Selling Fast</td>
                  <td>200 in stock</td>
                  <td className='hidden md:table-cell'>Vitality Gear Co.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}

function BellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
      <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
    </svg>
  )
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  )
}

function Package2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
      <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
      <path d='M12 3v6' />
    </svg>
  )
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m7.5 4.27 9 5.15' />
      <path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
      <path d='m3.3 7 8.7 5 8.7-5' />
      <path d='M12 22V12' />
    </svg>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  )
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='8' cy='21' r='1' />
      <circle cx='19' cy='21' r='1' />
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
    </svg>
  )
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  )
}
