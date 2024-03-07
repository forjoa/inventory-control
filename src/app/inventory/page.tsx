export default function Component() {
  const products = [
    {
      name: 'Glimmer Lamps',
      status: 'In Production',
      stock: '500',
      company: 'Luminance Creations',
    },
    {
      name: 'Aqua Filters',
      status: 'Available for Order',
      stock: '750',
      company: 'HydraClean Solutions',
    },
    {
      name: 'Eco Planters',
      status: 'Backordered',
      stock: '300',
      company: 'GreenGrowth Designers',
    },
    {
      name: 'Zest Juicers',
      status: 'Newly Launched',
      stock: '1000',
      company: 'FreshTech Appliances',
    },
    {
      name: 'Flexi Wearables',
      status: 'Selling Fast',
      stock: '200',
      company: 'Vitality Gear Co.',
    },
  ]

  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-lg md:text-2xl'>Inventory</h1>
        <button className='ml-auto bg-blue-500 px-5 py-2 rounded transition-all hover:bg-blue-400 text-white'>
          Add product
        </button>
      </div>
      <table className='w-auto'>
        <thead className='border border-slate-800 rounded-t'>
          <tr>
            <th className='p-3'>Name</th>
            <th className='hidden md:table-cell p-3'>Status</th>
            <th className='p-3'>Stock</th>
            <th className='hidden md:table-cell p-3'>Company</th>
          </tr>
        </thead>
        <tbody className='border border-slate-800 rounded-b'>
          {products.map((value, index) => {
            return (
              <tr key={index}>
                <td className='font-medium p-3'>{value.name}</td>
                <td className='hidden md:table-cell p-3'>{value.status}</td>
                <td className='p-3'>{value.stock}</td>
                <td className='hidden md:table-cell p-3'>{value.company}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  )
}
