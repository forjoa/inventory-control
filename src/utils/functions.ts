import { supabase } from '@/database/database_connection'
import { Discount, Product } from '@/types/types'

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export async function insertNewProduct(product: Product) {
  const { data, error } = await supabase.from('products').insert({
    name: product.name,
    description: product.description,
    price: product.price,
    cost: product.cost,
    size: product.size,
    weight: product.weight,
    stock: product.stock,
    bar_code: product.bar_code,
    category_id: product.category_id,
    discount_id: product.discount_id,
  })
}

export async function insertNewCategory(category: string) {
  const { data, error } = await supabase
    .from('categories')
    .insert({ name: category })
}

export async function insertNewDiscount(discount: Discount) {
  const { data, error } = await supabase.from('discounts').insert({
    discount_percentage: discount.percentage,
    start_date: discount.start_date,
    end_date: discount.end_date,
  })
}
