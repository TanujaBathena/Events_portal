import React from "react";
import InternshipCards from "./InternshipCards";
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const Internships = () => {
  return (
    <div className="container">
      <div
        style={{
          marginTop: "8vh",
          width: "100%",
          height: "10vh",
          textAlign: "center",
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <h1 style={{ alignSelf: "center", margin: "auto" }}>
          <u>Internships Portal</u>
        </h1>
        <button
          style={{
            alignSelf: "center",
            marginRight: "3%",
            backgroundColor: "rgba(1,1,1,0)",
            border: "0px solid red",
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </button>
      </div>

      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
    </div>
  );
};

export default Internships;
