import React from "react";
import {
createBrowserRouter,
Outlet,
RouterProvider,} from "react-router-dom";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";


 const Layout=()=>{

  return(
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menu__container">
        <Menu/>
        </div>
      <div className="content__container">
    <Outlet/>
      </div>
      </div>
      <Footer/>
    </div>
  );
};


const router = createBrowserRouter([
 {
  path:"/",
  element:<Layout/>,
  children:[
    {
    path:"/",
    element:<Home/>,
    },
    {
      path:"/products",
      element:<Products/>,
    }, 
     {
      path:"/users",
      element:<Users/>,
    },
    {
      path:"/users/:id",
      element:<User/>,
    },
    {
      path:"/products/:id",
      element:<Product/>,
    },
  ]
 },
 {
  path:"/login",
  element:<Login/>,
 },
]);
  
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;