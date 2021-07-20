import React from "react";
import MyPostCards from "./MyPostCards";
const MyPosts = () => {
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
          <u>My Posts</u>
        </h1>
      </div>
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
      <MyPostCards />
    </div>
  );
};

export default MyPosts;
