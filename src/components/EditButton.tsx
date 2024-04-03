'use client'
import { Product } from "@/types/types"
import { useState } from "react"

export default function EditButton({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <button className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500' onClick={togglePopup}>
        Edit
      </button>
      {showPopup && <EditProductFormPopup product={product} onClose={togglePopup}/>}
    </>
  )
}


const EditProductFormPopup = ({ product, onClose }: { product: Product, onClose: any }) => {

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='border border-slate-800 bg-gray-100/40 lg:block dark:bg-gray-800/40 ml-5 my-5 rounded-lg'>
        <button className='absolute top-0 right-0 p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
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
        <p>This is a pop-up window!</p>
      </div>
    </div>
  )
}
