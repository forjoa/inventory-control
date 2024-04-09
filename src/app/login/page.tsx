// pages/login.js
'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { supabase } from '@/database/database_connection'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        throw error
      }
      console.log('User logged in:', data)
      router.push('/')
    } catch (error) {
      console.error('Login error')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
