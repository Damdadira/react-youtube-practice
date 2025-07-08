import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../pages/Root/index.jsx'
import Error from '../pages/Error/index.jsx'
import Loading from '../pages/Loading/index.jsx'
import Videos from '../pages/Videos/index.jsx'
import VideoDetail from '../pages/VideoDetail/index.jsx'

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
        path: "/:keyword",
        element: <Videos />
      },
      {
        path: "/watch/:videoId",
        element: <VideoDetail />
      },
      {
        path: "/test-error",
        element: <Error />
      },
      {
        path: "/test-loading",
        element: <Loading />
      },
    ]
    
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
