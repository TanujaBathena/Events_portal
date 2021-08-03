import React from "react";
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InternshipCards = (props) => {
  return (
    <div className="card">
      <div className="card_header">
        <div className="calender">
          <FontAwesomeIcon icon={faCalendarWeek} size="1x" />
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} size="1x" />
        </div>
      </div>
      <div className="card_title">Internship at {props.company}</div>
      <div className="card_tags">
        <span className="label success">Success</span>
        <span className="label info">Info</span>
        <span className="label warning">Warning</span>
        <span className="label danger">Danger</span>
        <span className="label other">Other</span>
      </div>
      <div
        className="card_description"
        style={{ display: "flex", gap: "5%", flexWrap: "wrap", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <p style={{ color: "GrayText" }}>Role</p>
          <p>{props.role}</p>
        </div>
        <div style={{ display: "flex", width: "30%", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Stipend</p>
          <p>{props.stipend}</p>
        </div>
        <div style={{ display: "flex", width: "40%", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Duration</p>
          <p>{props.duration}</p>
        </div>
      </div>

      <Link to={`/internships/${props.ID}`}>
        <div className="readmore">
          <button className="btn" type="submit">
            Read More
          </button>
        </div>
      </Link>
      <div className="card_footer">
        <div className="deadline">DeadLine:{props.deadline}</div>
      </div>
    </div>
  );
};

export default InternshipCards;
