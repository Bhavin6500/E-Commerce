import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
//import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import Checkout from './pages/Checkout';
import ProductDetailsPage from './pages/ProductDetailsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "login",
    element:<LoginPage/>,
  },
  
  {
    path: "signup",
    element:<SignupPage/>,
  },
  
  {
    path: "cart",
    element:<Cart/>
  },
  
  {
    path: "checkout",
    element:<Checkout/>
  },
  
  {
    path: "product-details",
    element:<ProductDetailsPage/>
  }
]);



function App() {
  return (
    <div className="App">
    
  <RouterProvider router={router} />


          </div>
  );
}

export default App;
