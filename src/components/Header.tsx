'use client'
import { Package2Icon } from '@/assets/icons'
import Link from 'next/link'
import CartButton from './CartButton'
import LoginButton from './LoginButton'
import { useState } from 'react'
import RegisterButton from './RegisterButton'

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false)

  const handleLoginToggle = () => setIsLoginOpen(!isLoginOpen)
  const handleRegisterToggle = () => setIsRegisterOpen(!isRegisterOpen)

  return (
    <header className='h-14 flex items-center px-4 md:px-6 sticky top-0 dark:bg-black backdrop-blur-xl z-10'>
      <div className='hidden md:flex items-center gap-4 lg:gap-6'>
        <Link className='flex items-center gap-2 font-semibold' href='/home'>
          <Package2Icon className='h-6 w-6' />
          <span className=''>Store</span>
        </Link>
      </div>
      <div className='w-full md:flex-1'>
        <form>
          <input
            className='hidden md:w-[300px] lg:w-[400px] xl:w-[500px] md:flex md:ml-4 md:px-2 md:py-1 lg:ml-6 rounded-lg outline-none dark:text-black text-sm'
            placeholder='Search products...'
            type='search'
          />
        </form>
      </div>
      <div className='flex ml-auto lg:ml-0 items-center gap-4 lg:gap-6'>
        <LoginButton toggleLogin={handleLoginToggle} isOpen={isLoginOpen} />
        <RegisterButton
          toggleRegister={handleRegisterToggle}
          isOpen={isRegisterOpen}
        />
        <CartButton />
      </div>
    </header>
  )
}

export default Header
