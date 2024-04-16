'use client'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = ({ handleToggle }: { handleToggle: any }) => {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <div className='absolute bg-black border border-gray-800 rounded text-white p-4 top-[60px] right-[130px]'>
      <span onClick={handleToggle}>Cerrar</span>
      <div>Cart Content:</div>
      <div>
        <ul>
          {cart.map((product, index) => {
            return (
              <li key={index}>
                <p>{product.name}</p>
                <button
                  className='bg-blue-500 rounded py-2 px-4 hover:bg-blue-400 transition-all'
                  onClick={() => removeFromCart(product.product_id)}
                >
                  Remove from cart
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Cart
