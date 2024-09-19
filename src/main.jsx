import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Todo from './Pages/Todo'
import NotFound from './Pages/NotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'todo',
        element: <Todo />
      },
      {
        path: '*',
        element: <NotFound />
      },

    ]
  },
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
