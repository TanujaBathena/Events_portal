import { React, useState } from "react";
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "./auth";
// import Loader from "./Loader";
import Loaderstar from "./Loaderstar";
const InternshipCards = (props) => {
  // console.log(props);
  const [disabled, setdisable] = useState(false);
  const [starloading, setStarloading] = useState(false);
  const handlestarred = (e, state) => {
    setdisable(true);
    setStarloading(true);
    const datatobesent = {
      postid: props.ID,
    };
    if (state) {
      axios
        .post("http://localhost:4444/starred/intern/tounstar", datatobesent, {
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
            e.target.style.color = "grey";
            setdisable(false);
            setStarloading(false);
          }
        });
    } else {
      axios
        .post("http://localhost:4444/starred/intern/tostar", datatobesent, {
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
  const [starred, setIsstarred] = useState(props.starred);
  return (
    <div className="card">
      <div className="card_header">
        <div className="calender">
          <FontAwesomeIcon icon={faCalendarWeek} size="2x" />
        </div>

        {!starloading && (
          <button
            className="star"
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
        {starloading && <Loaderstar />}
      </div>
      <div className="card_title">
        <b>Internship at {props.company}</b>
      </div>
      <div className="card_tags">
        <span className="label success">Success</span>
        <span className="label info">Info</span>
        <span className="label warning">Warning</span>
        <span className="label danger">Danger</span>
        <span className="label other">Other</span>
      </div>
      <div
        className="card_description"
        style={{
          display: "flex",
          gap: "5%",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <p style={{ color: "GrayText" }}>Role</p>
          <p>{props.role}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}
        >
          <p style={{ color: "GrayText" }}>Branches</p>
          <p>
            {props.branches.map((branch) => {
              return <span key={branch}>{branch} </span>;
            })}
          </p>
        </div>
        <div style={{ display: "flex", width: "40%", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Stipend</p>
          <p>{props.stipend}</p>
        </div>
        <div style={{ display: "flex", width: "40%", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Duration</p>
          <p>{props.duration}</p>
        </div>
      </div>

      <div className="card_footer">
        <Link
          to={`/internships/${props.ID}`}
          style={{
            marginLeft: "auto",
            marginTop: "auto",
          }}
        >
          {/* <div className="readmore"> */}
          <button
            className="btn"
            type="submit"
            style={{ width: "max-content" }}
          >
            Read More
          </button>
          {/* </div> */}
        </Link>
        <div className="deadline">
          DeadLine:{props.deadline.slice(0, 16).replace("T", "\t ,\t")}
        </div>
      </div>
    </div>
  );
};

export default InternshipCards;
