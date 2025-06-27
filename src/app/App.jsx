import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../pages/Root/index.jsx'
import Error from '../pages/Error/index.jsx'
import Videos from '../pages/Videos/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Videos />
      },
      {
        path: "/videos",
        element: <Videos />
      }
    ]
    
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
