import "./index.scss";
import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";




const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
 



  //sign in with google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
     console.log(error);
      
    }
    if(error){
      setError(error);
    }
  }


  return (
    <section className="login">
   
   <div className="login__wrapper">
   <span>log in with google</span>
   <button onClick={googleLogin}><FcGoogle /></button>

{error && <span style={{ color: "tomato" }}>there is an error</span>}
   </div>


    </section>
  )
}

export default Login;
