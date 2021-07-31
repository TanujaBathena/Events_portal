import { React, useState, useEffect } from "react";
import TeamupCard from "./TeamupCard";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const heading1 = {
  marginTop: "8vh",
  width: "100%",
  height: "50vh",
  textAlign: "center",
  boxSizing: "border-box",
  backgroundColor: "white",
  backgroundImage:
    "url(https://img.freepik.com/free-vector/business-partners-handshake_74855-5222.jpg?size=626&ext=jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "50% 50vh",
  backgroundPosition: "right",
  display: "flex",
};
const bun = {
  alignSelf: "center",
  position: "absolute",
  top: "90vh",
  left: "95vw",
  backgroundColor: "rgba(0,0,0,0)",
  border: "0px solid red",
};
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
          <div style={heading1}>
            <h1 style={{ alignSelf: "left" }}>TeamUp portal</h1>
            <button style={bun}>
              <Link to="/Teamup/form">
                <FontAwesomeIcon icon={faPlusCircle} size="3x" />
              </Link>
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
