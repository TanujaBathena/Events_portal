import React from "react";
import "../styles/card.css";
import "../styles/fontawesome-free-5.15.3-web/css/all.css";
const InternshipCards = () => {
  return (
    <div className="card">
      <div className="card_header">
        <div className="calender">
          <i className="fas fa-calendar-week fa-1x"></i>
        </div>
        <div className="star">
          <i className="fas fa-star fa-1x"></i>
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
