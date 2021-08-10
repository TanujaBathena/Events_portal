import { React, useState } from "react";
import "../styles/card.css";
import Modal from "./Modal";

const TeamupCard = (props) => {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const array = ["danger", "success", "info", "warning"];
=======
  const array = ["success", "info", "warning", "danger"];
>>>>>>> faf28adc1faeee4fd2e2863238aeecf01c536490
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
        <h4 style={{ color: "black" }}>
          <b>{props.title}</b>
        </h4>
      </div>
      <div className="card_tags" style={{ marginLeft: "3%" }}>
        {props.tag.map((tag, index) => (
          <span key={tag} className={`label ${array[index % 4]}`}>
            {tag}
          </span>
        ))}
        {/* <span className="label success">Success</span>
        <span className="label info">Info</span>
        <span className="label warning">Warning</span>
        <span className="label danger">Danger</span>
        <span className="label other">Other</span> */}
      </div>

      <p
        style={{
          color: "GrayText",
          marginLeft: "3%",
          marginTop: "5px",
          alignSelf: "flex-start",
        }}
      >
        Posted By
      </p>
      <p style={{ marginLeft: "3%" }}> {props.name}</p>
      <div
        className="card_description"
        style={{ marginTop: "10px", height: "10%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          }}
        >
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
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={props.title}
        skills={props.skills}
        description={props.description}
        name={props.name}
        ID={props.ID}
      ></Modal>
    </div>
  );
};

export default TeamupCard;
