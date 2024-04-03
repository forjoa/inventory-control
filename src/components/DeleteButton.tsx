'use client'
import { supabase } from '@/database/database_connection'

export default function DeleteButton({ product_id }: { product_id: number }) {
  return (
    <button
      className='bg-red-600 py-2 px-6 rounded transition-all hover:bg-red-500'
      onClick={() => deleteProduct(product_id)}
    >
      Delete
    </button>
  )
}

async function deleteProduct(product_id: number) {
  await supabase.from('products').delete().eq('product_id', product_id)
}

