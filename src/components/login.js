import React from 'react';
import "../styles/login.css";
import axios from 'axios';

const Login = () => {
    const handleClick = (event)=>{
        // console.log("hi")
        // axios.get("http://localhost:4444/login/auth",{
        //     headers: {
        //         'Access-Control-Allow-Origin': 'http://localhost:4444'}
        //     }).then(res=>{console.log(res)});
        window.open("http://localhost:4444/login/google","_self");
    }

    return (
        
    <div class="container1">
    <div class="box">
      <div class="btn1">
        <div class="text">
          <a href="#" onClick={handleClick}>
            Sign in with Google
          </a>
        </div>
        <div class="image">
          <img
            src="https://img.icons8.com/fluent/48/000000/google-logo.png"
          />
        </div>
      </div>
    </div>
  </div>

    )
}

export default Login

    