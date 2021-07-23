import {React,useState,useEffect} from "react";
import TeamupCard from "./TeamupCard";
import axios from "axios";
import Auth from './auth'
const Teamup = () => {

  const people = [
    {
      id: "11",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "12",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "13",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "14",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "15",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "16",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "17",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
    {
      id: "18",
      title: "Required web developer",
      name: "chris",
      skills: "react",
    },
  ];
      let[isLoading,setIsLoading]=useState(false)
      useEffect(()=>{
        setIsLoading(false);
        axios.get("http://localhost:4444/teamup",{
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
                setIsLoading(true);
            } });
    },[])


  return ( 
    
    isLoading && <div className="container">

      <div
        style={{
          marginTop: "8vh",
          width: "100%",
          height: "10vh",
          textAlign: "center",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <h1 style={{ alignSelf: "center", margin: "auto" }}>TeamUp portal</h1>
        <button
          style={{
            alignSelf: "center",
            marginRight: "3%",
            backgroundColor: "rgba(1,1,1,0)",
            border: "0px solid red",
          }}
        >
          <i className="fas fa-plus-circle fa-3x"></i>
        </button>
      </div>
      {people.map((person) => (
        <TeamupCard
          key={person.id}
          title={person.title}
          name={person.name}
          skills={person.skills}
        />
      ))}
    </div>
  );
};

export default Teamup;
