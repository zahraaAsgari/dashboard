import React from "react";
import "./index.scss";
import { navbarIcons } from "../../constants/data";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";



const Navbar = () => {
  const [user]=useAuthState(auth);
  return (
    <nav className="nav__menu">
      <div className="logo">
        <img src="dashboard.svg" alt="logo" width={40} />
        <span>Dashboard</span>
      </div>
      <div className="nav__right">
    
        <ul className="nav__icons">
{
  navbarIcons.map((icon,index) =>(
<li key={index} className="nav__icon">
  {icon}
</li>
  ))
}
</ul>
<div className="nav__notification">
<IoMdNotificationsOutline/>
<span>1</span>
</div>
{user && (
          <div className="nav__profile">
            {user.photoURL ? (
              <img src={user.photoURL} alt="user" />
            ) : (
              <div className="default-user-avatar">User</div>
            )}
            <span>{user.displayName || "User"}</span>
          </div>
        )}
<IoSettingsOutline/>
</div>
     
    </nav>
  )
}

export default Navbar