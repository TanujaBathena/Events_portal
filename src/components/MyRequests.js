import React from "react";
import MyRequestCards from "./MyRequestCards";
const MyRequests = () => {
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
          <u>My Requests</u>
        </h1>
      </div>
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />
      <MyRequestCards />

      <MyRequestCards />
    </div>
  );
};

export default MyRequests;
