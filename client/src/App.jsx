import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, Dashboard, AppLayout, Landing, Login, Profile, Register } from './pages'
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { multiFormActions as dashboardAction, loader as dashboardLoader } from './pages/Dashboard';
import { loader as profileLoader } from './pages/Profile';

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
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction
      },
      {
        path: 'profile/:id',
        element: <Profile />,
        loader: profileLoader,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
