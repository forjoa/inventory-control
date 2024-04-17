'use client'
import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'

const Component = () => {
  const { cart } = useContext(CartContext)
  
  const totalAmount = cart.reduce((total, product) => total + product.price, 0)

  return (
    <div className='flex flex-col gap-2'>
      <p>Shopping cart</p>
      <ul className='border border-gray-800 rounded'>
        {cart.map((product, index) => {
          return (
            <li
              key={index}
              className={`p-4 ${
                index !== cart.length - 1 ? 'border-b-gray-800 border-b' : ''
              } flex justify-between items-center`}
            >
              <p>
                {product.name}
                <br />
                <span className='text-gray-400'>{product.description}</span>
              </p>
              <p className='text-l font-bold'>{product.price} €</p>
            </li>
          )
        })}
      </ul>
      <div className='flex justify-between items-center'>
        <p>Total amount to pay</p>
        <p className='dark:bg-white dark:text-black bg-black text-white py-2 px-4 rounded'>{totalAmount} €</p>
      </div>
    </div>
  )
}

export default Component
