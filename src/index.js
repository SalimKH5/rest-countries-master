import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CountryD from './CountryD/CountryD';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"country/:countryname",
    element:<CountryD/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


