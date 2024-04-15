'use client'
import { Product } from '@/types/types'
import { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((product) => product.product_id != itemId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
