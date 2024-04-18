'use client'
import { CloseIcon } from '@/assets/icons'
import { useState } from 'react'

const RegisterButton = ({
  toggleRegister,
  isOpen,
}: {
  toggleRegister: any
  isOpen: boolean
}) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = (e: any) => e.preventDefault()

  return (
    <>
      <button
        className='hidden md:flex text-sm font-medium hover:underline underline-offset-4'
        onClick={toggleRegister}
      >
        Register
      </button>
      {isOpen && (
        <div className='absolute top-0 left-0 w-full h-[100dvh] flex items-center justify-center bg-black bg-opacity-40'>
          <div className='border border-slate-800 w-3/4 md:w-2/5 bg-white lg:block dark:bg-black rounded-lg'>
            <div className='p-8 w-full'>
              <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                <div className='w-full flex justify-end cursor-pointer'>
                  <CloseIcon width={20} onClick={toggleRegister} />
                </div>
                <p className='flex flex-col gap-1 text-2xl font-bold'>
                  Create an account
                  <span className='text-sm font-normal text-gray-500 leading-none'>
                    Enter your details to get started.
                  </span>
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='first-name'>First name</label>
                    <input
                      type='text'
                      id='first-name'
                      placeholder='John'
                      className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='last-name'>Last name</label>
                    <input
                      type='text'
                      id='last-name'
                      placeholder='Doe'
                      className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
                    type='email'
                    placeholder='example@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='password'>Password</label>
                  <input
                    className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500 text-white'
                >
                  Sign up
                </button>
                <div className='flex flex-col items-end'>
                  <p className='text-gray-500'>Already have an account?</p>
                  <button className='underline'>Log in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterButton
