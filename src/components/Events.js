import React from "react";
import Eventcard from "./Eventcard.js";
import "../styles/card.css";
import "../styles/container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div className="container">
      <div className="heading1">
        <p className="teamup">Events</p>
        <p className="content">Events </p>
        <span style={{ marginTop: "5%", fontSize: "20px" }}>
          Add Your Post Below
        </span>
        <Link to="/Events/form">
          <button className="bun">
            <FontAwesomeIcon icon={faPlus} size="3x" />
          </button>
        </Link>
      </div>
      <div className="eventcontainer">
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
        <Eventcard />
      </div>
    </div>
  );
};

export default Events;
