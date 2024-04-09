// components/ProtectedRoute.js

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/database/database_connection'

const ProtectedRoute = ({ children } : { children: any}) => {
  const router = useRouter()

  useEffect(() => {
    const session = supabase.auth.getSession()
    if (!session) {
      router.push('/login')
    }
  }, [router])

  return <>{children}</>
};

export default ProtectedRoute
