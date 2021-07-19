import React from "react";
import "../styles/card.css";

const ReceivedRequestsCards = () => {
  return (
    <div className="card" style={{ height: "250px" }}>
      <div className="card_title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
      </div>
      <b style={{ marginTop: "2%", height: "10%" }}>Descrption:</b>
      <div className="card_description" style={{ height: "205" }}>
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
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button className="btn" type="submit">
          reject
        </button>
        <button className="btn" type="submit">
          accept
        </button>
      </div>
    </div>
  );
};

export default ReceivedRequestsCards;