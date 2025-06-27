import { Outlet } from 'react-router'
import Header from '../../shared/ui/Header.jsx'

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}