'use client'

import { supabase } from '@/database/database_connection'
import { ReactEventHandler, useState } from 'react'

export default function DeleteButton({ product_id }: { product_id: number }) {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  console.log(showPopup)

  const togglePopup = (product_id:number) => {
    setShowPopup(!showPopup)
    deleteProduct(product_id)
  }

  return (
    <>
      <button
        className='bg-red-600 py-2 px-6 rounded transition-all hover:bg-red-500'
        onClick={() => togglePopup(product_id)}
      >
        Delete
      </button>

      {showPopup && <Popup />}
    </>
  )
}

async function deleteProduct(product_id: number) {
  await supabase.from('products').delete().eq('product_id', product_id)
}

const Popup = () => {
    
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg p-8'>
        <button className='absolute top-0 right-0 p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <p>This is a pop-up window!</p>
      </div>
    </div>
  )
}
