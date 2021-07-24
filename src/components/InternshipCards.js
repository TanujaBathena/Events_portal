import React from "react";
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const InternshipCards = () => {
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
      <div className="card_title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
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
        style={{ display: "flex", gap: "5%", flexWrap: "wrap", width: "100%" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <p style={{ color: "GrayText" }}>Role</p>
          <p>Lorem Lorem Lorem</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Stipend</p>
          <p>Lorem Lorem Lorem</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Duration</p>
          <p>Lorem Lorem Lorem</p>
        </div>
      </div>
      <div className="readmore">
        <button className="btn" type="submit">
          Read More
        </button>
      </div>
      <div className="card_footer">
        <div className="deadline">Dead Line:27 july evening 5:30pm</div>
      </div>
    </div>
  );
};

export default InternshipCards;
