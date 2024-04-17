'use client'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { CloseIcon } from '@/assets/icons'
import { useRouter } from 'next/navigation'

const Cart = ({ handleToggle }: { handleToggle: any }) => {
  const { cart, removeFromCart } = useContext(CartContext)
  const router = useRouter()

  const totalAmount = cart.reduce((total, product) => total + product.price, 0)

  return (
    <div className='absolute bg-black border border-gray-800 rounded text-white p-4 top-[60px] right-[5%] z-10 flex flex-col gap-2 min-w-[200px]'>
      <span onClick={handleToggle} className='w-full flex justify-end'>
        <CloseIcon width={16} />
      </span>
      <p className='w-full flex'>Cart</p>
      <div className='flex flex-col gap-2'>
        <ul className='flex flex-col gap-2'>
          {cart.map((product, index) => {
            return (
              <li
                key={index}
                className='flex justify-between align-middle gap-4'
              >
                <div className='flex flex-col text-left'>
                  <p>{product.name}</p>
                  <p className='text-slate-400'>{product.price} €</p>
                </div>
                <div className='flex align-middle'>
                  <button
                    className='bg-red-500 rounded py-2 px-4 hover:bg-red-400 transition-all my-auto'
                    onClick={() => removeFromCart(product.product_id)}
                  >
                    <CloseIcon width={14} height={14} />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
        <hr className='border-t border-gray-800' />
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <p>Total:</p>
            <p>{totalAmount} €</p>
          </div>
          <div>
            <button
              className='bg-blue-500 w-full py-1 rounded hover:bg-blue-400 transition-all'
              onClick={() => router.push('/home/cart')}
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
