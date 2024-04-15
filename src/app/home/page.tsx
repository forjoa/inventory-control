import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/database/database_connection'
import { Discount, Product } from '@/types/types'
import placeholder from '@/assets/placeholder.svg'
import { CartProvider } from '@/components/CartContext'

export default async function Component() {
  const { data } = await supabase
    .from('products')
    .select(
      'product_id, name, description, price, cost, size, weight, stock, bar_code, created_at, discount_id'
    )
  const products: Product[] = data as Product[]

  return (
    <CartProvider>
      <main className='grid gap-6 p-4 lg:gap-12 lg:p-6'>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <h1 className='text-2xl font-bold tracking-tighter lg:text-4xl'>
              Summer Collection
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Shop the latest trends
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {products.map(async (product, index) => {
              const { data } = await supabase
                .from('discounts')
                .select('*')
                .eq('discount_id', product.discount_id)
              const discount: Discount = data != null ? data[0] : {}

              return (
                <div
                  key={index}
                  className='border border-slate-800 rounded-lg flex flex-col relative'
                >
                  <span
                    className={`${
                      product.discount_id > 0
                        ? 'absolute top-[-10px] right-[-10px] bg-red-500 px-1 rounded'
                        : 'hidden'
                    }`}
                  >
                    Discounted product!
                  </span>
                  <Link
                    className='aspect-square overflow-hidden rounded-t-lg'
                    href='#'
                  >
                    <Image
                      alt={product.name}
                      className='object-cover aspect-image rounded-t-lg'
                      height='500'
                      src={placeholder}
                      width='500'
                    />
                    <span className='sr-only'>View item</span>
                  </Link>
                  <div className='p-4 flex flex-col justify-between flex-grow'>
                    <Link
                      className='font-bold line-clamp-2 hover:underline underline-offset-2'
                      href='#'
                    >
                      {product.name}
                    </Link>
                    <span className='font-light'>{product.description}</span>
                    {product.discount_id > 0 ? (
                      <p className='font-semibold'>
                        <span>
                          {' '}
                          {Math.floor(
                            product.price -
                              product.price *
                                (discount.discount_percentage / 100)
                          )}{' '}
                          €
                        </span>
                        <br />
                        <del className='text-slate-500'>
                          {product.price} €
                        </del>{' '}
                        <span className='text-red-400 text-[13px]'>
                          -{discount.discount_percentage}%{' '}
                        </span>
                      </p>
                    ) : (
                      <p className='font-semibold'>{product.price} €</p>
                    )}
                    <button className='bg-blue-500 rounded py-2 px-4 hover:bg-blue-400 transition-all'>
                      Add to cart
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </CartProvider>
  )
}
