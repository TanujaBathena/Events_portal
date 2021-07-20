import React from "react";
import "../styles/card.css";

const ReceivedRequestsCards = () => {
  return (
    <div className="card" style={{ height: "150px" }}>
      <div className="card_title" v style={{ border: "0px" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
      </div>

      <div
        className="card_footer"
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <button
          className="btn"
          style={{
            marginLeft: "auto",
          }}
        >
          View details
        </button>
        {/* <button className="btn" type="submit">
          reject
        </button>
        <button className="btn" type="submit">
          accept
        </button> */}
      </div>
    </div>
  );
};

export default ReceivedRequestsCards;
