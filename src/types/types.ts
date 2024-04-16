export interface Product {
  product_id: number
  name: string
  description: string
  price: number
  cost: number
  size: string
  weight: number
  stock: number
  bar_code: string
  created_at: string
  category_id: number
  discount_id: number
}

export interface Discount {
  discount_id?: number
  discount_percentage: number
  start_date: string
  end_date: string
}

export interface Category {
  category_id: number
  name: string
  created_at: string
}

export interface CartContextType {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (itemId: number) => void
}
