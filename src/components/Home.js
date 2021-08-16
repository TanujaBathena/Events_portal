import { useState, useEffect } from "react";
import React from "react";
import Auth from "./auth";
import axios from "axios";
import InternshipCards from "./InternshipCards";
import Loader from "./Loader";
import Eventcard from "./Eventcard.js";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [cards_e, setcards_e] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("In home page");
    setIsLoading(true);
    axios
      .get("http://localhost:4444/home", {
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
          setCards(res.data[0].reverse());
          setcards_e(res.data[1].reverse());
          setIsLoading(false);
        } else {
          window.location.reload();
        }
      });
  }, []);
  if (!isLoading) {
    return (
      <div className="container">
        <div className="heading1">
          <p className="teamup">Home</p>
          <p className="content">You can find your starred messages here! </p>
        </div>
        {(() => {
          if (cards_e.length === 0 && cards.length === 0) {
            return (
              <div
                style={{
                  width: "100%",
                  marginTop: "20vh",
                  textAlign: "center",
                }}
              >
                <h1>No starred messages </h1>
              </div>
            );
          }
          return null;
        })()}
        {(() => {
          if (cards.length > 0) {
            return (
              <div style={{ width: "100%", textAlign: "center" }}>
                <h1>Internships </h1>
              </div>
            );
          }
          return null;
        })()}

        {cards.map((card) => (
          <InternshipCards
            key={card._id}
            ID={card._id}
            name={card.Name}
            user_id={card.User_Id}
            company={card.CompanyIntern}
            role={card.RoleIntern}
            stipend={card.StipendIntern}
            duration={card.DurationIntern}
            deadline={card.DeadlineIntern}
            description={card.DescriptionIntern}
            branches={card.BranchesIntern}
            files={card.Files}
            starred={true}
          />
        ))}
        <div className="eventcontainer">
          {(() => {
            if (cards_e.length > 0) {
              return (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <h1>Events </h1>
                </div>
              );
            }
            return null;
          })()}

          {cards_e.map((card) => (
            <Eventcard
              key={card._id}
              ID={card._id}
              title={card.Title}
              clubname={card.Club}
              fromdate={card.Fromdate}
              todate={card.Todate}
              venue={card.Venue}
              starred={true}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Home;
