'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/database/database_connection'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        throw error
      }
      router.push('/')
    } catch (error) {
      console.error('Login error')
    }
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='border border-slate-800 w-3/4 md:w-1/4 bg-gray-100 lg:block dark:bg-gray-900 rounded-lg'>
        <div className='p-8 w-full'>
          <form onSubmit={handleLogin} className='flex flex-col gap-2'>
            <h1 className='text-lg font-bold'>Login to use the dashboard</h1>
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='bg-gray-100/40 dark:bg-gray-800/40 rounded p-2 outline-none'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type='submit'
              className='bg-blue-600 py-2 px-6 rounded transition-all hover:bg-blue-500 '
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
