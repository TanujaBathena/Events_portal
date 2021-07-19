import React from "react";
import "../styles/card.css";
import "../styles/fontawesome-free-5.15.3-web/css/all.css";
const TeamupCard = () => {
  return (
    <div className="card" style={{ height: "350px" }}>
      <div className="card_title" style={{ height: "30%" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
      </div>
      <div className="card_tags">
        <span className="label success">Success</span>
        <span className="label info">Info</span>
        <span className="label warning">Warning</span>
        <span className="label danger">Danger</span>
        <span className="label other">Other</span>
      </div>
      <b style={{ marginTop: "2%", height: "5%" }}>NoelVincent</b>
      <b style={{ marginTop: "2%", height: "5%" }}>Skills Required:</b>
      <div className="card_description" style={{ height: "10%" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        nesciunt sunt labore, accusantium dolores ipsam quo alias debitis!
        Impedit tempore perferendis adipisci id velit nostrum nam commodi ad
        quas itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugit reprehenderit facilis quibusdam illum dolore ipsam ad fugiat,
        beatae repellat ea nam, odit magnam animi dignissimos impedit reiciendis
        saepe modi labore.
      </div>

      <div
        className="card_footer"
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "3%",
        }}
      >
        <button className="btn" type="submit">
          Interested
        </button>
        <button className="btn" type="submit">
          Know More
        </button>
      </div>
    </div>
  );
};

export default TeamupCard;
