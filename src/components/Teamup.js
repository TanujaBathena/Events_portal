import React from "react";
import TeamupCard from "./TeamupCard";
const Teamup = () => {
  return (
    <div className="container">
      <div
        style={{
          marginTop: "8vh",
          width: "100%",
          height: "10vh",
          textAlign: "center",
          boxSizing: "border-box",
          backgroundColor: "aqua",
          display: "flex",
        }}
      >
        <h1 style={{ alignSelf: "center", margin: "auto" }}>TeamUp portal</h1>
        <button
          style={{
            alignSelf: "center",
            marginRight: "3%",
            backgroundColor: "rgba(1,1,1,0)",
            border: "0px solid red",
          }}
        >
          <i class="fas fa-plus-circle fa-5x"></i>
        </button>
      </div>
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
      <TeamupCard />
    </div>
  );
};

export default Teamup;
