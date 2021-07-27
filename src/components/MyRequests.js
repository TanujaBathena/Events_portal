import {React,useState,useEffect} from "react";
import MyRequestCards from "./MyRequestCards";
import axios from 'axios'
import Auth from './auth'
import Loader from "./Loader"
const MyRequests = () => {
    const [cards, setCards] = useState([]);
   
    let [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(false);
      axios
        .get("http://localhost:4444/Profile/myrequests", {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((res) => {
          if (res.data !== "notloggedin") {
            Auth.login();
            setCards(res.data);
            console.log(res.data);
            setIsLoading(true);
          }
        });
    }, []);



  if(isLoading){
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
        <h1 style={{ alignSelf: "center", margin: "auto" }}>
          <u>My Requests</u>
        </h1>
      </div>
        {cards.map((card) => (
            <MyRequestCards
              key={card.post._id}
              ID={card.post._id}
              title={card.post.Requirements}
              postedname={card.post.Name}
              postdescription={card.post.Description}
              skills={card.post.Skill}
              yourdescription={card.Description}
              status={card.status}
            />
          ))}
    </div>
  );
  }else{
    return <Loader/>
  }
  
};

export default MyRequests;
