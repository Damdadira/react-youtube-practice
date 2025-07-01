import { Outlet } from 'react-router'
import { Header } from '../../shared/ui'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function Root() {
  
  return (
    <>
      <Header />
      {/* 우산을 씌워줄때는 가장 가까운 곳에서 */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}