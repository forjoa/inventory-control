'use client'
import { useRouter } from 'next/navigation'

const Layout = () => {
  const router = useRouter()
  router.push('/home')
  return <></>
}

export default Layout
