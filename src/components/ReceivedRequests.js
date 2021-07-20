import React from "react";
import ReceivedRequestsCards from "./ReceivedRequestsCards";
const ReceivedRequests = () => {
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
          <u>Received Requests</u>
        </h1>
      </div>
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
      <ReceivedRequestsCards />
    </div>
  );
};

export default ReceivedRequests;
