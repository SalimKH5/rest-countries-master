import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Detail from './Components/Detail.tsx'
import { ThemeProvider } from './Components/ThemeContexte.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/details/:name",
    element: <Detail/>,
  },
],
{
  basename:'/rest-countries-master'
}
);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <div className="w-full h-full  bg-[#f3f3f3e4] dark:bg-[#202c37]">
      <Navbar />
      <RouterProvider router={router} />
    </div>
    </ThemeProvider>

  </StrictMode>,
)
