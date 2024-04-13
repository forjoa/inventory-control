import AddCategoryButton from '@/components/AddCategoryButton'
import AddDiscountButton from '@/components/AddDiscountButton'
import AddProductButton from '@/components/AddProductButton'
import DeleteButton from '@/components/DeleteButton'
import EditButton from '@/components/EditButton'
import ProtectedRoute from '@/components/ProtectedComponent'
import { supabase } from '@/database/database_connection'
import { Product } from '@/types/types'
import { formatDate } from '@/utils/functions'

export default async function Component() {
  const { data } = await supabase
    .from('products')
    .select(
      'product_id, name, description, price, cost, size, weight, stock, bar_code, created_at, discount_id, category_id'
    )
  const products: Product[] = data as Product[]

  return (
    <ProtectedRoute>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='w-full flex justify-between align-middle'>
          <h1 className='font-semibold text-lg md:text-2xl flex align-middle'>Inventory</h1>
          <div className='flex gap-2'>
            <AddProductButton />
            <AddCategoryButton />
            <AddDiscountButton />
          </div>
        </div>
        <div className='border border-slate-800 rounded-lg'>
          <table className='w-full'>
            <thead className='border-b border-slate-800'>
              <tr>
                <th className='p-3 border-r border-slate-800'>NAME</th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  DESCRIPTION
                </th>
                <th className='p-3 border-r border-slate-800'>PRICE</th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  COST
                </th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  SIZE
                </th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  WEIGHT
                </th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  STOCK
                </th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  BAR CODE
                </th>
                <th className='hidden lg:table-cell p-3 border-r border-slate-800'>
                  CREATED AT
                </th>
                <th className='p-3'>ACTIONS</th>
              </tr>
            </thead>
            <tbody className=''>
              {products.map((product, index) => (
                <tr key={index} className='border-t border-slate-800'>
                  <td className='font-medium p-3 border-r border-slate-800'>
                    {product.name}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {product.description}
                  </td>
                  <td className='p-3 border-r border-slate-800'>
                    {`${product.price} $`}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {`${product.cost} $`}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {product.size}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {`${product.weight} kg`}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {`${product.stock} u`}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {product.bar_code}
                  </td>
                  <td className='hidden lg:table-cell p-3 border-r border-slate-800'>
                    {formatDate(product.created_at)}
                  </td>
                  <td className='h-full p-3 flex justify-center items-center gap-3'>
                    <EditButton product={product} />
                    <DeleteButton product_id={product.product_id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </ProtectedRoute>
  )
}
