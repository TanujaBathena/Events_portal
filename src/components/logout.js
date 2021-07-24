import axios from "axios";
import {React,useEffect} from "react";
import Auth from "./auth"


const Logout = () => {
  useEffect(()=>{
    axios.get("http://localhost:4444/logout",{ //sending a get request to the server to destroy the cookies.
        withCredentials: true,                 //sends the request by adding cookies to html header .
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
    }});
    Auth.logout(); //set the isAuthenticated to false
    },[])

  return <div>Logout</div>;
};

export default Logout;
