import { React, useState, useEffect } from "react";
import InternshipCards from "./InternshipCards";
// import "../styles/card.css";
// import "../styles/container.css";
import "../styles/teamup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
import address from "./address";
import internship from "../photos/internship.png";
const Internships = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://${address.ip}:4444/internships`, {
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
          setIsLoading(true);
        } else {
          window.location.reload();
        }
      });
  }, []);
  if (isLoading) {
    return (
      <div className="container">
        <div className="banner">
          <div className="type">
            <span className="teamup" style={{ textAlign: "center" }}>
              Internships Portal
            </span>
            {/* <span className="content">
                You can find your companion who can help you in solving a
                problem or accompany you in paricipating a hackathon or helping
                you in a project
              </span> */}
            <span
              style={{
                marginTop: "5%",
                fontSize: "20px",
              }}
            >
              Add Your Post Below
            </span>
            <Link to="/internships/form">
              <button className="bun">
                <FontAwesomeIcon icon={faPlus} size="3x" />
              </button>
            </Link>
          </div>
          <div className="picbox">
            <img src={internship} alt="img" className="pic" />
          </div>

          {/* <Sliden /> */}
        </div>

        {cards.map((card) => (
          <InternshipCards
            key={card._id}
            ID={card._id}
            name={card.Name}
            user_id={card.User_Id}
            company={card.Company}
            role={card.Role}
            stipend={card.Stipend}
            duration={card.Duration}
            deadline={card.Deadline}
            description={card.Description}
            branches={card.Branches}
            files={card.Files}
            starred={card.Starred}
          />
        ))}
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Internships;
