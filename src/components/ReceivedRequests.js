import { React, useEffect, useState } from "react";
import ReceivedRequestsCards from "./ReceivedRequestsCards";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
const ReceivedRequests = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:4444/Profile/receivedrequests", {
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
          console.log(res.data);
        }
      });
  }, []);
  if (isLoading) {
    return (
      <div className="container">
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
            <u>Received Requests</u>
          </h1>
        </div>
        {cards.map((card) => {
          if(card.post!==null){
            return(<ReceivedRequestsCards
            key={card._id}
            ID={card._id}
            title={card.post.Requirements}
            name={card.name}
            skills={card.post.Skill}
            postdescription={card.post.Description}
            status={card.status}
            description={card.Description}
            requesteduserid={card.requestedUser_id}
            post_mong_id={card.post._id}
            mydescription={card.MyDescription}
          />)
          }else{
            return(<ReceivedRequestsCards
              key={card._id}
              ID={card._id}
              title={card.PostTitle}
              name={card.name}
              skills={"post is deleted"}
              postdescription={"this post is deleted"}
              status={card.status}
              description={card.Description}
              requesteduserid={card.requestedUser_id}
              post_mong_id={0}
              mydescription={card.MyDescription}
            />)
          }

        })}
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default ReceivedRequests;
