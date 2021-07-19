import React from "react";
import "../styles/card.css";
import "../styles/fontawesome-free-5.15.3-web/css/all.css";
const InternshipCards = () => {
  return (
    <div className="card">
      <div className="card_header">
        <div className="calender">
          <i className="fas fa-calendar-week fa-2x"></i>
        </div>
        <div className="star">
          <i className="fas fa-star fa-2x"></i>
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
      <b style={{ marginTop: "2%" }}>Descrption:</b>
      <div className="card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nesciunt sunt labore, accusantium dolores ipsam quo alias debitis!
        Impedit tempore perferendis adipisci id velit nostrum nam commodi ad
        quas itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugit reprehenderit facilis quibusdam illum dolore ipsam ad fugiat,
        beatae repellat ea nam, odit magnam animi dignissimos impedit reiciendis
        saepe modi labore.
      </div>
      <div className="readmore">
        <button
          className="btn"
          type="submit"
          style={{
            boxSizing: "border-box",
            width: "100px",
            height: "50px",
            padding: "5px",
            alignSelf: "flex-end",
            marginRight: "3%",
            marginBottom: "2%",
            fontSize: "medium",
            borderRadius: "5px",
          }}
        >
          Read More
        </button>
      </div>
      <div className="card_footer">
        <div className="deadline">DeadLine:27 july evening 5:30pm</div>
      </div>
    </div>
  );
};

export default InternshipCards;
