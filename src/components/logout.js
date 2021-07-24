import axios from "axios";
import {React,useEffect} from "react";
import Auth from "./auth"


const Logout = () => {
  useEffect(()=>{
    axios.get("http://localhost:4444/logout",{
        withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
    }});
 Auth.logout();
    },[])

  return <div>logout</div>;
};

export default Logout;
