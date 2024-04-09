'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/database/database_connection'

const ProtectedRoute = ({ children }: { children: any }) => {
  const router = useRouter()

  const auth = async () => {
    const session = await supabase.auth.getSession()
    if (!session.data.session) {
      router.push('/login')
    }
  }

  useEffect(() => {
    auth()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default ProtectedRoute
