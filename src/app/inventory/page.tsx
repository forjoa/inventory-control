import { supabase } from "@/database/database_connection"
import { Product } from "@/types/types";

export default function Component() {
  const products = supabase.from('products').select();
   
  return (
    <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
      <div className='flex items-center'>
        <h1 className='font-semibold text-lg md:text-2xl'>Inventory</h1>
      </div>
      <div className='border border-slate-800 rounded-lg'>
        <table className='w-full'>
          <thead className='border-b border-slate-800'>
            <tr>
              <th className='p-3 border-r border-slate-800'>NAME</th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                DESCRIPTION
              </th>
              <th className='p-3 border-r border-slate-800'>PRICE</th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                COST
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                SIZE
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                WEIGHT
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                STOCK
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                BAR CODE
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                CREATED AT
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                CATEGORY
              </th>
              <th className='hidden md:table-cell p-3 border-r border-slate-800'>
                SUBCATEGORY
              </th>
              <th className='p-3'>ACTIONS</th>
            </tr>
          </thead>
          <tbody className=''>
            {/* {products.map((value, index) => {
              return (
                <tr key={index} className='border-t border-slate-800'>
                  <td className='font-medium p-3 border-r border-slate-800'>
                    {value.name}
                  </td>
                  <td className='hidden md:table-cell p-3 border-r border-slate-800'>
                    {value.status}
                  </td>
                  <td className='p-3 border-r border-slate-800'>
                    <p className='block m-auto w-fit'>{value.stock}</p>
                  </td>
                  <td className='hidden md:table-cell p-3 border-r border-slate-800'>
                    {value.company}
                  </td>
                  <td className='py-1 flex justify-center gap-3'>
                    <button className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500'>
                      Edit
                    </button>
                    <button className='bg-red-600 py-2 px-6 rounded transition-all hover:bg-red-500'>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })} */}
          </tbody>
        </table>
      </div>
    </main>
  )
}
