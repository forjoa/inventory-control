'use client'
import { useState } from 'react'
import ConfirmDeletePopup from './ConfirmDeletePopup'

export default function DeleteButton({ product_id }: { product_id: number }) {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <button
        className='bg-red-600 py-2 px-6 rounded transition-all hover:bg-red-500 text-white'
        onClick={togglePopup}
      >
        Delete
      </button>
      {showPopup && <ConfirmDeletePopup product_id={product_id} onClose={togglePopup} />}
    </>
  )
}



