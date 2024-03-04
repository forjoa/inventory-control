import { SearchIcon } from '@/assets/icons'
import Image from 'next/image'

export default function Component() {
  return (
    <>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b border-slate-600 bg-gray-100/40 px-6 dark:bg-gray-800/40'>
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
          <div className='border border-slate-600 rounded-lg'>
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
