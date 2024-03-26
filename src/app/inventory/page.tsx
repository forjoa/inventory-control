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
      </div>
      <div className="border border-slate-800 rounded-lg">
        <table className='w-full'>
          <thead className='border-b border-slate-800'>
            <tr>
              <th className='p-3 border-r border-slate-800'>NAME</th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>STATUS</th>
              <th className='p-3 border-r border-slate-800'>STOCK</th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>COMPANY</th>
              <th className='p-3'>ACTIONS</th>
            </tr>
          </thead>
          <tbody className=''>
            {products.map((value, index) => {
              return (
                <tr key={index} className="border-t border-slate-800">
                  <td className='font-medium p-3 border-r border-slate-800'>{value.name}</td>
                  <td className='hidden md:table-cell p-3 border-r border-slate-800'>{value.status}</td>
                  <td className='p-3 border-r border-slate-800'><p className="block m-auto w-fit">{value.stock}</p></td>
                  <td className='hidden md:table-cell p-3 border-r border-slate-800'>{value.company}</td>
                  <td className='py-1 flex justify-center gap-3'>
                    <button className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500'>
                      Edit
                    </button>
                    <button className="bg-red-600 py-2 px-6 rounded transition-all hover:bg-blue-500">
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
