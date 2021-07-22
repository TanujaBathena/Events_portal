import {React,useEffect} from "react";
import Auth from "./auth"

const Logout = () => {
  useEffect(()=>{
        Auth.logout();
    },[])

  return <div>logout</div>;
};

export default Logout;
