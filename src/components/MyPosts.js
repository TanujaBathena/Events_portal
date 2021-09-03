import { React, useState, useEffect } from "react";
import MyPostCards from "./MyPostCards";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import Myposticard from "./MypostInternshipcard";
import Mypostecard from "./MyPostecard";
import address from "./address";

const MyPosts = (props) => {
  const [cards, setCards] = useState([]);
  const [deleted, setdeleted] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const [cardnumber, setCardnumber] = useState([0, 0, 0]);
  const checkcards = (cards) => {
    //eslint-disable-next-line
    {
      //eslint-disable-next-line
      var teamupcards = 0;
      var internshipcards = 0;
      var eventcards = 0;
      //eslint-disable-next-line
      cards.map((card) => {
        //eslint-disable-next-line
        if (card.Type === 1) {
          teamupcards = teamupcards + 1;
        } else if (card.Type === 2) {
          internshipcards = internshipcards + 1;
        } else if (card.Type === 3) {
          eventcards = eventcards + 1;
        }
        //eslint-disable-next-line
      });
      return [teamupcards, internshipcards, eventcards];
    }
  };
  useEffect(() => {
    console.log("inside mypost use effect", deleted);
    setIsLoading(false);
    axios
      .get(`http://${address.ip}:4444/Profile/myposts`, {
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
          console.log(res.data);
          setCards(res.data.reverse());
          let x = checkcards(res.data);
          setCardnumber(x);
          setIsLoading(true);
        } else {
          window.location.reload();
        }
      });
    //eslint-disable-next-line
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
          {((cardnumber) => {
            if (
              cardnumber[0] === 0 &&
              cardnumber[1] === 0 &&
              cardnumber[2] === 0
            ) {
              return (
                <div
                  style={{
                    width: "100%",
                    marginTop: "20vh",
                    textAlign: "center",
                  }}
                >
                  <h1>You haven't posted yet </h1>
                </div>
              );
            }
            return null;
          })(cardnumber)}
          {((cardnumber) => {
            if (cardnumber[0] > 0) {
              return (
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <h1>Teamup Posts </h1>
                </div>
              );
            }
            return null;
          })(cardnumber)}
          {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
          {cards.map((card) => {
            if (card.Type === 1) {
              return (
                <MyPostCards
                  key={card._id}
                  id={card._id}
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
          {((cardnumber) => {
            if (cardnumber[1] > 0) {
              return (
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <h1>Internship Posts </h1>
                </div>
              );
            }
            return null;
          })(cardnumber)}
          {/* // eslint-disable-next-line */}
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
          {((cardnumber) => {
            if (cardnumber[2] > 0) {
              return (
                <div
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <h1>Event Posts </h1>
                </div>
              );
            }
            return null;
          })(cardnumber)}
          {/* // eslint-disable-next-line */}
          {cards.map((card) => {
            if (card.Type === 3) {
              return (
                <Mypostecard
                  id={card._id}
                  ID={card._id}
                  key={card._id}
                  title={card.Title}
                  fromdate={card.Fromdate}
                  todate={card.Todate}
                  venue={card.Venue}
                  deleted={deleted}
                  type={card.Type}
                  delfunc={setdeleted}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
      )
    );
  } else {
    return <Loader />;
  }
};

export default MyPosts;
