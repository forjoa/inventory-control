'use client'

import { Product } from "@/types/types"

export default function EditButton({ product } : { product: Product}) {
  return (
    <button className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500' onClick={() => console.log(product)}>
      Edit
    </button>
  )
}
