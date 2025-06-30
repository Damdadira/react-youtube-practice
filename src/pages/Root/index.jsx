import { Outlet } from 'react-router'
import { Header } from '../../shared/ui'

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}