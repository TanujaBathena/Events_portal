import { useEffect } from "react"
import React from 'react'
import Auth from "./auth"
import axios from 'axios'

const Home = () => {
    useEffect(()=>{
        console.log("In home page");
        axios.get("http://localhost:4444/home",{
            withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
      }
        }).then(res=>{
            if (res.data!=="notloggedin") {
                Auth.login()
            } });
    },[])

    return (
        <div className="container" style={{margin:"auto",marginTop:"50vh"}}>
        <h1 style={{
          margin:"auto",

          color: "grey",
        }}> Your starred messages will be shown here..</h1>
        </div>
    )
}

export default Home
