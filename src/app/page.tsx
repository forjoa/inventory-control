import { SearchIcon } from '@/assets/icons'

export default function Component() {
  const products = [
    {
      name: 'Glimmer Lamps',
      status: 'In Production',
      stock: '500 in stock',
      company: 'Luminance Creations',
    },
    {
      name: 'Aqua Filters',
      status: 'Available for Order',
      stock: '750 in stock',
      company: 'HydraClean Solutions',
    },
    {
      name: 'Eco Planters',
      status: 'Backordered',
      stock: '300 in stock',
      company: 'GreenGrowth Designers',
    },
    {
      name: 'Zest Juicers',
      status: 'Newly Launched',
      stock: '1000 in stock',
      company: 'FreshTech Appliances',
    },
    {
      name: 'Flexi Wearables',
      status: 'Selling Fast',
      stock: '200 in stock',
      company: 'Vitality Gear Co.',
    },
  ]

  return (
    <>
      <div className='flex flex-col'>
        <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b border-slate-600 bg-gray-100/40 px-6 dark:bg-gray-800/40'>
          <div className='flex-1'>
            <form>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <input
                  className='w-full bg-white shadow-none h-8 rounded appearance-none pl-8 pr-2 md:w-2/3 lg:w-1/3 dark:bg-gray-950 outline-none'
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
            <button className='ml-auto bg-blue-500 px-5 py-2 rounded transition-all hover:bg-blue-400'>
              Add product
            </button>
          </div>
          <table className='w-auto'>
            <thead className='border border-slate-600 rounded-t'>
              <tr>
                <th className='p-3'>Name</th>
                <th className='hidden md:table-cell p-3'>Status</th>
                <th className='hidden md:table-cell p-3'>Inventory</th>
                <th className='p-3'>Vendor</th>
              </tr>
            </thead>
            <tbody className='border border-slate-600 rounded-b'>
              {products.map((value, index) => {
                return (
                  <tr key={index}>
                    <td className='font-medium p-3'>{value.name}</td>
                    <td className='hidden md:table-cell p-3'>{value.status}</td>
                    <td className='p-3'>{value.stock}</td>
                    <td className='hidden md:table-cell p-3'>
                      {value.company}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}
