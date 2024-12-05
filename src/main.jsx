import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import DashBoard from './components/DashBoard/DashBoard';
import CardDetails from './components/AllProducts/cardDetails';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        loader: () => fetch(`/fakeData.json`),
        element: <CardDetails></CardDetails>,
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>,
        
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
