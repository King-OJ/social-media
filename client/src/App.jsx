import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, Home, AppLayout, Landing, Login, Profile, Register } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing/>,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
