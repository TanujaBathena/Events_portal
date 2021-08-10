import React from "react";
import "../styles/login.css";

const Login = () => {
  const handleClick = (event) => {
    window.open("http://b463a02abd34.ngrok.io/login/google", "_self"); //opens  a new window where you can select your mail accounts.
  };

  return (
    <div className="container1">
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
    </div>
  );
};

export default Login;
