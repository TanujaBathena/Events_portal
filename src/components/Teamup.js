import { React, useState, useEffect } from "react";
import TeamupCard from "./TeamupCard";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/container.css";

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
        } else {
          window.location.reload();
        }
      });
  }, []);

  if (isLoading) {
    return (
      isLoading && (
        <div className="container">
          <div className="heading1">
            <p className="teamup">TeamUp Portal</p>
            <p className="content">
              You can find your companion who can help you in solving a problem
              or accompany you in paricipating a hackathon or helping you in a
              project
            </p>
            <span style={{ marginTop: "5%", fontSize: "20px" }}>
              Add Your Post Below
            </span>
            <Link to="/Teamup/form">
              <button className="bun">
                <FontAwesomeIcon icon={faPlus} size="3x" />
              </button>
            </Link>
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
