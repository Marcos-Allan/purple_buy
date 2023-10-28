import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Products from './pages/Products/index.jsx'
import Contact from './pages/Contact/index.jsx'
import ErrorPage from './pages/ErrorPage/index.jsx'


import { ThemeProvider } from '@emotion/react'
import { LightTheme } from './assets/theme/Light.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  }
])

export default function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
