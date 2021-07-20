import React from "react";
import "../styles/card.css";
import "../styles/fontawesome-free-5.15.3-web/css/all.css";
const TeamupCard = () => {
  return (
    <div className="card" style={{ height: "250px" }}>
      <div
        className="card_title"
        style={{
          width: "85%",
          height: "fit-content",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h5>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
        </h5>
      </div>

      <div className="card_tags" style={{ marginLeft: "3%" }}>
        <span className="label success">Success</span>
        <span className="label info">Info</span>
        <span className="label warning">Warning</span>
        <span className="label danger">Danger</span>
        <span className="label other">Other</span>
      </div>
      <h5
        style={{
          height: "5%",
          color: "GrayText",
          marginLeft: "3%",
          marginTop: "2%",
          alignSelf: "flex-start",
        }}
      >
        Noel Vincent
      </h5>
      <div
        className="card_description"
        style={{ marginTop: "0px", height: "10%" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>skills required</p>
          <p>Lorem Lorem Lorem</p>
        </div>
      </div>

      <div
        className="card_footer"
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {/* <button className="btn" type="submit">
          Interested
        </button> */}
        <button
          className="btn"
          type="submit"
          style={{ marginLeft: "auto", alignSelf: "flex-end" }}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default TeamupCard;
