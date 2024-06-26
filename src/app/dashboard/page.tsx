import ProtectedRoute from '@/components/ProtectedComponent'

export default function Component() {
  return (
    <ProtectedRoute>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='flex items-center'>
          <h1 className='font-semibold text-lg md:text-2xl'>Analytics</h1>
        </div>
      </main>
    </ProtectedRoute>
  )
}
