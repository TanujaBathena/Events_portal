import React from "react";
import "../styles/login.css";
import address from "./address";

const Login = () => {
  const handleClick = (event) => {
    window.open(`http://${address.ip}:4444/login/google`, "_self"); //opens  a new window where you can select your mail accounts.
  };

  return (
    <div className="boxe">
      <img
        src="https://img.icons8.com/fluent/48/000000/google-logo.png"
        alt="google"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />
      <span style={{ color: "red" }}>Please use your IIT Goa mail address</span>
      <div className="btn1">
        <button className="lbtn" onClick={handleClick}>
          <span>Sign in with Google</span>
        </button>

        <div className="image">
          <img
            src="https://img.icons8.com/fluent/48/000000/google-logo.png"
            alt="google"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
