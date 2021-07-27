import { React, useState, useEffect } from "react";
import TeamupCard from "./TeamupCard";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
const Teamup = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:4444/teamup", {
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
        }
      });
  }, []);

  if (isLoading) {
    return (
      isLoading && (
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
              TeamUp portal
            </h1>
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
          {cards.map((card) => (
            <TeamupCard
              key={card._id}
              ID={card._id}
              title={card.Requirements}
              name={card.Name}
              skills={card.Skill}
              description={card.Description}
            />
          ))}
        </div>
      )
    );
  } else {
    return <Loader />;
  }
};

export default Teamup;
