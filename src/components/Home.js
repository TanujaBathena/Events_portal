import { useEffect } from "react"
import React from 'react'
import Auth from "./auth"
import axios from 'axios'

const Home = () => {
    useEffect(()=>{
        console.log("hiiiiiiiiiiiiiiii");
        axios.get("http://localhost:4444/home",{
            withCredentials: true,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
      }
        }).then(res=>{
            console.log(res.data)
            if (res.data!=="notloggedin") {
                Auth.login()
                console.log(res.data);
            } });
    },[])

    return (
        <div>
            <h1>home page</h1>
        </div>
    )
}

export default Home
