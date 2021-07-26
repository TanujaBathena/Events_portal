import {React,useState,useEffect} from "react";
import MyPostCards from "./MyPostCards";
import axios from "axios"
import Auth from './auth'

const MyPosts = (props) => {
  
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:4444/Profile/myposts", {
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
          setIsLoading(true);
          console.log(res.data)
        }

      });
  }, []);
  
  
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
          <u>My Posts</u>
        </h1>
      </div>
        {cards.map((card) => (
          <MyPostCards
            key={card._id}
            title={card.Requirements}
            name={card.Name}
            skills={card.Skill}
            description={card.Description}
          />
        ))}
    </div>
  );
};

export default MyPosts;
