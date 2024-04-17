'use client'
import { AddProduct } from '@/assets/icons'
import { useContext, useState } from 'react'
import Cart from './Cart'
import { CartContext } from '@/context/CartContext'

export default function CartButton() {
  const { cart } = useContext(CartContext)
  const [togglePopup, setTogglePopup] = useState<boolean>(false)

  const handleToggle = () => setTogglePopup(!togglePopup)

  return (
    <>
      <button
        className='dark:text-black dark:bg-white text-white bg-black text-sm rounded-md px-3 py-1 flex justify-center items-center gap-1'
        onClick={handleToggle}
      >
        <AddProduct />
        <p className='hidden md:flex md:justify-center md:items-center md:h-full my-auto'>
          Cart{' '}
          <span className='dark:text-white dark:bg-black text-black bg-white flex justify-center items-center px-2 rounded-full aspect-square ml-1'>
            {cart.length}
          </span>
        </p>
      </button>
      {togglePopup && <Cart handleToggle={handleToggle} />}
    </>
  )
}
