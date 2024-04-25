'use client'
import { CartContextType, Product } from '@/types/types'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
})

export const CartProvider = ({ children }: { children: any }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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
