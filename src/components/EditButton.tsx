'use client'
import { Product } from "@/types/types"
import { useState } from "react"
import EditProductFormPopup from "./EditProductFormPopup"

export default function EditButton({ product }: { product: Product }) {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <>
      <button className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500 text-white' onClick={togglePopup}>
        Edit
      </button>
      {showPopup && <EditProductFormPopup product={product} onClose={togglePopup}/>}
    </>
  )
}
