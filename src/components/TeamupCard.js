import { React, useState } from "react";
import "../styles/card.css";
import Modal from "./Modal";

const TeamupCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card" style={{ height: "250px" }}>
      <div
        className="card_title"
        style={{
          width: "85%",
          height: "fit-content",
          marginTop: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h5>{props.title}</h5>
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
        {props.name}
      </h5>
      <div
        className="card_description"
        style={{ marginTop: "0px", height: "10%" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "GrayText" }}>Skills Required</p>
          <p>{props.skills}</p>
        </div>
      </div>

      <div
        className="card_footer"
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <button
          className="btn"
          type="submit"
          style={{ marginLeft: "auto", alignSelf: "flex-end" }}
          onClick={() => setOpen(true)}
        >
          Know More
        </button>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}></Modal>
    </div>
  );
};

export default TeamupCard;
