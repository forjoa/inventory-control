'use client'
import { supabase } from '@/database/database_connection'

export default function ConfirmDeletePopup({
  product_id,
  onClose,
}: {
  product_id: number
  onClose: any
}) {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='border border-slate-800 w-3/4 md:w-1/4 bg-gray-100 lg:block dark:bg-gray-900 rounded-lg'>
        <button className='w-full flex pt-6 pb-2 px-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 ml-auto self-center'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={onClose}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div className='px-8 pb-8 w-full'>
          <p>Are you sure you want to delete this product?</p>
          <div className='flex w-full justify-between gap-4 mt-4'>
            <button
              className='py-2 w-full border border-slate-800 rounded'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='py-2 w-full border border-red-800 rounded bg-red-800 bg-opacity-50'
              onClick={() => deleteProduct(product_id, onClose)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

async function deleteProduct(product_id: number, onClose: any) {
  onClose()
  await supabase.from('products').delete().eq('product_id', product_id)
}
