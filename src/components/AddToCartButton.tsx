'use client'
import { Product } from '@/types/types'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <button
      className='bg-blue-500 rounded py-2 px-4 hover:bg-blue-400 transition-all'
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  )
}

export default AddToCartButton
