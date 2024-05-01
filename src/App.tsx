import React, { ReactNode, useEffect } from "react";
import {
createBrowserRouter,
  useNavigate,
Outlet,
RouterProvider,} from "react-router-dom";
import "./style/globals.scss";
import {Footer, Menu, Navbar} from "./components";
import { Home, Login, Product, Products, User, Users } from "./pages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";


 const Layout=()=>{
  const [user]=useAuthState(auth);
  const navigate=useNavigate();

  useEffect(() => {
    // Retrieve the user data from local storage
    const storedUserData = localStorage.getItem("user");

  
    // Check if there's stored user data and it's not null
    if (storedUserData) {
      try {
        // Parse the stored user data as JSON
        const storedUser = JSON.parse(storedUserData);
  
        // Check if user is not already authenticated and stored user data is available
        if (!user && !storedUser) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error parsing user data from local storage:", error);
      }
    } else {
      // Handle case when no user data is found in local storage
      console.log("No user data found in local storage");
      // Optionally navigate to login if necessary
      navigate("/login");
    }
  }, [user, navigate]);
  

  
 

  return(
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menu__container">
        <Menu/>
        </div>
      <div className="content__container">
        {user && (
            <Outlet/>
        ) }
    
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