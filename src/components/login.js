import React from "react";
import "../styles/login.css";

const Login = () => {
  const handleClick = (event) => {
    // console.log("hi")
    // axios.get("http://localhost:4444/login/auth",{
    //     headers: {
    //         'Access-Control-Allow-Origin': 'http://localhost:4444'}
    //     }).then(res=>{console.log(res)});
    window.open("http://localhost:4444/login/google", "_self");
  };

  return (
    <div class="container1">
      <div class="box">
        <div class="btn1">
          <div class="text">
            <button
              style={{
                width: "100%",
                border: "0px",
                backgroundColor: "rgba(0,0,0,0)",
                color: "white",
                fontSize: "20px",
              }}
              onClick={handleClick}
            >
              Sign in with Google
            </button>
          </div>
          <div class="image">
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
