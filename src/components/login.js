import React from "react";
import "../styles/login.css";

const Login = () => {
  const handleClick = (event) => {
    window.open("http://localhost:4444/login/google", "_self"); //opens  a new window where you can select your mail accounts.
  };

  return (
    <div className="container1" style={{display:"flex",flexDirection:"column" , gap:"1%"}}>
      <div className="box">
        <div className="btn1">
          <button className="lbtn" onClick={handleClick}>
            Sign in with Google
          </button>

          <div className="image">
            <img
              src="https://img.icons8.com/fluent/48/000000/google-logo.png"
              alt="google"
            />
          </div>
        </div>
      </div>
      <div style={{color:"red"}}>* Please use your IIT Goa Mail ID</div>
    </div>
    
  );
};

export default Login;
