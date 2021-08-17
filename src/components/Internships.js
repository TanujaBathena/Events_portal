import { React, useState, useEffect } from "react";
import InternshipCards from "./InternshipCards";
import "../styles/card.css";
import "../styles/container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Auth from "./auth";
import Loader from "./Loader";
const Internships = () => {
  const [cards, setCards] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:4444/internships", {
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
        <div className="heading1">
          <p className="teamup">Internship Portal</p>
          <p className="content">
            You can find valuable internships and many opportunities here!{" "}
          </p>
          <span style={{ marginTop: "5%", fontSize: "20px" }}>
            Add Your Post Below
          </span>
          <Link to="/Internships/form">
            <button className="bun">
              <FontAwesomeIcon icon={faPlus} size="3x" />
            </button>
          </Link>
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
