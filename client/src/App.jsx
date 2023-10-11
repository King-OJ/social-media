import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error, Dashboard, AppLayout, Landing, Login, Profile, Register } from './pages'
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { multiFormActions as dashboardAction, loader as dashboardLoader } from './pages/Dashboard';
import { PostFeeds, ProfilePostFeeds } from './components';
import { actions as PostFeedActions, loader as PostsLoader } from './components/PostFeeds';
import { loader as profileLoader } from './pages/Profile';
import { actions as ProfilePostAction } from './components/ProfilePostFeeds';

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
        action: dashboardAction,
        children: [
          {
            index: true,
            element: <PostFeeds/>,
            loader: PostsLoader,
            action: PostFeedActions,
          },
        ]
      },
      {
        path: 'profile/:id',
        element: <Profile />,
        loader: profileLoader,
        children: [
          {
            index: true,
            element: <ProfilePostFeeds/>,
            action: ProfilePostAction,
          },
        ]
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
