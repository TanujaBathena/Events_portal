import { React, useState, useEffect } from "react";
import MyPostCards from "./MyPostCards";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import Myposticard from "./MypostInternshipcard";
const MyPosts = (props) => {
  const [cards, setCards] = useState([]);
  const [deleted, setdeleted] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("inside mypost use effect", deleted);
    setIsLoading(false);
    axios
      .get("http://localhost:4444/Profile/myposts", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data !== "notloggedin") {
          Auth.login();
          setCards(res.data);
          setIsLoading(true);
          console.log(res.data);
        } else {
          window.location.reload();
        }
      });
  }, [deleted]);

  if (isLoading) {
    return (
      isLoading && (
        <div className="container">
          <div className="heading1">
            <p className="teamup">My posts</p>
            <p className="content">
              You can find your posts which you have posted..{" "}
            </p>
          </div>
          <div
            style={{
              margin: "auto",
              marginTop: "20px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1>Team Up Posts</h1>
          </div>
          {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
          {cards.map((card) => {
            if (card.Type === 1) {
              return (
                <MyPostCards
                  id={card._id}
                  key={card._id}
                  title={card.Requirements}
                  name={card.Name}
                  skills={card.Skill}
                  description={card.Description}
                  deleted={deleted}
                  type={card.Type}
                  delfunc={setdeleted}
                />
              );
            } else {
              return <></>;
            }
          })}
          {/* </div> */}
          <div
            style={{
              margin: "auto",
              marginTop: "100px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1>Internship Posts</h1>
          </div>
          {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
          {cards.map((card) => {
            if (card.Type === 2) {
              return (
                <Myposticard
                  id={card._id}
                  key={card._id}
                  title={card.Company}
                  name={card.Name}
                  skills={card.Duration}
                  description={card.Description}
                  deleted={deleted}
                  type={card.Type}
                  delfunc={setdeleted}
                />
              );
            } else {
              return <></>;
            }
          })}
          {/* </div> */}
        </div>
      )
    );
  } else {
    return <Loader />;
  }
};

export default MyPosts;
