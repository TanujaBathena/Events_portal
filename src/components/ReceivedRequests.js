import {React,useEffect,useState} from "react";
import ReceivedRequestsCards from "./ReceivedRequestsCards";
import axios from 'axios'
import Auth from "./auth"

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
        {cards.map((card) => (
            <ReceivedRequestsCards
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
            />
        ))}
    </div>
  );
};

export default ReceivedRequests;
