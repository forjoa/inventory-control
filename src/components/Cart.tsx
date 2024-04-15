'use client'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = ({ handleToggle }: { handleToggle: any }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  console.log(cart)
  console.log(addToCart)
  console.log(removeFromCart)
  
  return (
    <div className='absolute bg-black border border-gray-800 rounded text-white p-4 top-[60px] right-[130px]'>
      <button onClick={handleToggle}>Cerrar</button>
      <div>Cart Content:</div>
    </div>
  );
}

export default Cart;
