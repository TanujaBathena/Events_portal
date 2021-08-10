import { React, useState, useEffect } from "react";
import MyRequestCards from "./MyRequestCards";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
const MyRequests = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://b463a02abd34.ngrok.io/Profile/myrequests", {
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
          console.log(res.data);
          setIsLoading(true);
        } else {
          window.location.reload();
        }
      });
  }, []);

  if (isLoading) {
    return (
      isLoading && (
        <div className="container">
          <div className="heading1">
            <p className="teamup">My Requests</p>
            <p className="content">
              You can find your requests which you are interested in.
            </p>
          </div>
          {cards.map((card) => {
            if (card.post !== null) {
              return (
                <MyRequestCards
                  key={card.post._id}
                  ID={card.post._id}
                  title={card.post.Requirements}
                  postedname={card.post.Name}
                  postdescription={card.post.Description}
                  skills={card.post.Skill}
                  yourdescription={card.Description}
                  status={card.status}
                  meetdescription={card.MeetDescription}
                  deleted={false}
                />
              );
            } else {
              return (
                <MyRequestCards
                  key={card.id}
                  ID={card.id}
                  title={card.PostTitle}
                  postedname={card.PostOwner}
                  postdescription={"this post is deleted"}
                  skills={"this post is deleted"}
                  yourdescription={card.Description}
                  status={card.status}
                  meetdescription={card.MeetDescription}
                  deleted={true}
                />
              );
            }
          })}
        </div>
      )
    );
  } else {
    return <Loader />;
  }
};

export default MyRequests;
