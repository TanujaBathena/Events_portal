import { React, useState, useEffect } from "react";
import Eventcard from "./Eventcard.js";
import "../styles/card.css";
import "../styles/container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Auth from "./auth";
import Loader from "./Loader.js";
import axios from "axios";
import address from "./address.js";
import "../styles/teamup.css";
import events from "../photos/events.png";
const Events = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://${address.ip}:4444/events/`, {
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
          console.log(res.data);
          setCards(res.data.reverse());
          setIsLoading(true);
        } else {
          window.location.reload();
        }
      });
  }, []);
  if (isLoading) {
    return (
      <div className="container">
        {/* <div className="banner"> */}
        <div className="banner">
          <div className="type">
            <span className="teamup">Events Portal</span>
            {/* <span className="content">
                You can find your companion who can help you in solving a
                problem or accompany you in paricipating a hackathon or helping
                you in a project
              </span> */}
            <span
              style={{
                marginTop: "5%",
                fontSize: "20px",
              }}
            >
              Add Your Post Below
            </span>
            <Link to="/Events/form">
              <button className="bun">
                <FontAwesomeIcon icon={faPlus} size="3x" />
              </button>
            </Link>
          </div>
          <div className="picbox">
            <img src={events} alt="img" className="pic" />
          </div>

          {/* <Sliden /> */}
        </div>
        <div className="eventcontainer">
          {cards.map((card) => (
            <Eventcard
              key={card._id}
              ID={card._id}
              title={card.Title}
              clubname={card.Club}
              fromdate={card.FromDate}
              todate={card.ToDate}
              venue={card.Venue}
              starred={card.Starred}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Events;
