import { React, useState } from "react";
import "../styles/eventcard.css";
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Auth from "./auth";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/loaderstar.css";
const Eventcard = (props) => {
  const [disabled, setdisable] = useState(false);
  const [starloading, setStarloading] = useState(false);
  const [starred, setIsstarred] = useState(props.starred);
  const handlestarred = (e, state) => {
    setdisable(true);
    setStarloading(true);
    const datatobesent = {
      postid: props.ID,
    };
    if (state) {
      axios
        .post("http://localhost:4444/starred/events/tounstar", datatobesent, {
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
            setIsstarred(!state);
            e.target.style.color = "red";
            setdisable(false);
            setStarloading(false);
          }
        });
    } else {
      //   console.log("unnnnnnnnstar");
      axios
        .post("http://localhost:4444/starred/events/tostar", datatobesent, {
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
            setIsstarred(!state);
            e.target.style.color = "gold";
            setdisable(false);
            setStarloading(false);
          }
        });
    }
  };

  return (
    <div className="eventcard">
      <div className="clubinfo">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="p"
          className="responsivem"
        ></img>
        <p className="clubname">{props.clubname}</p>
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="p"
          className="responsive"
        ></img>
        <Link to={`Events/${props.ID}`}>
          <button
            className="btnevent"
            type="submit"
            style={{ width: "max-content" }}
          >
            Read More
          </button>
        </Link>

        {!starloading && (
          <button
            className="starem"
            disabled={disabled}
            style={{ border: "0px", backgroundColor: "rgba(0,0,0,0)" }}
          >
            {starred && (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                color="gold"
                id="stars"
                style={{ cursor: "pointer" }}
                onClick={(e) => handlestarred(e, starred)}
              />
            )}
            {!starred && (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                color="grey"
                id="stars"
                style={{ cursor: "pointer" }}
                onClick={(e) => handlestarred(e, starred)}
              />
            )}
          </button>
        )}
        {starloading && <div className="loaderstar mob"></div>}
      </div>
      <div className="details">
        {!starloading && (
          <button
            className="stare"
            disabled={disabled}
            style={{ border: "0px", backgroundColor: "rgba(0,0,0,0)" }}
          >
            {starred && (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                color="gold"
                id="stars"
                style={{ cursor: "pointer" }}
                onClick={(e) => handlestarred(e, starred)}
              />
            )}
            {!starred && (
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                color="grey"
                id="stars"
                style={{ cursor: "pointer" }}
                onClick={(e) => handlestarred(e, starred)}
              />
            )}
          </button>
        )}
        {starloading && <div className="loaderstar comp"></div>}
        <p className="headinge">{props.title}</p>
        <button
          style={{
            border: "0px",
            marginLeft: "25px",
            backgroundColor: "rgba(0,0,0,0)",
            width: "100%",
          }}
          className="tv but"
        >
          {/* <div className="calender"> */}
          <FontAwesomeIcon icon={faCalendarPlus} size="1x" />
          <p>
            <b>Add to calender</b>
          </p>
          {/* </div> */}
        </button>
        <h4 className="tv">
          {" "}
          <b>Timings</b>
        </h4>
        <h5 className="tv">
          {new Date(props.fromdate).toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          })}
          {"  "}
          {"  "}
          {"  "}
          <span>
            &nbsp; <b> to</b>
            &nbsp;
          </span>
          {"  "}
          {"  "}
          {"  "}
          {new Date(props.todate).toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
          })}
        </h5>
        <h4 className="tv">
          {" "}
          <b>Venue</b>
        </h4>
        <h5 className="tv">{props.venue}</h5>
        <button
          className="btneventm"
          type="submit"
          style={{ width: "max-content" }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Eventcard;
