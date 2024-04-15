'use client'
import { AddProduct } from '@/assets/icons';
import { useState } from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';

export default function CartButton() {
  const [togglePopup, setTogglePopup] = useState<boolean>(false);

  const handleToggle = () => setTogglePopup(!togglePopup);

  return (
    <CartProvider>
      <button
        className='dark:text-black dark:bg-white text-sm rounded-md px-3 py-1 flex justify-center gap-1'
        onClick={handleToggle}
      >
        <AddProduct />
        <span className='hidden md:block md:h-full my-auto'>Cart</span>
        {togglePopup && (
          <Cart handleToggle={handleToggle} />
        )}
      </button>
    </CartProvider>
  );
}
