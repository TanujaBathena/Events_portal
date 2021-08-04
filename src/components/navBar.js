import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const colorw = {
  color: "white",
};
const Navbar = (props) => {
  const myFunction = function () {
    var x = document.getElementsByClassName("list");
    var y = document.getElementsByClassName("lines");
    if (x[0].style.display === "none") {
      x[0].style.display = "flex";
      y[0].style.backgroundColor = "rgba(1,1,1,0.5)";
      x[0].style.animation = "mymove 1s ";
    } else {
      x[0].style.animation = "mymove1 0.5s ";
      setTimeout(function () {
        x[0].style.display = "none";
      }, 200);
      y[0].style.backgroundColor = "";
    }
  };
  function dropProfile() {
    var x = document.getElementsByClassName("profilelinks");
    var y = document.getElementsByClassName("down");
    if (x[0].style.display === "none") {
      x[0].style.display = "flex";
      y[0].style.transform = "rotate(-135deg)";
    } else {
      x[0].style.display = "none";
      x[0].style.animation = "mymove1 0.5s ";
      y[0].style.transform = "rotate(45deg)";
    }
  }

  function dropProfile1() {
    var x = document.getElementsByClassName("profilelinks");
    var y = document.getElementsByClassName("down");
    if (x[1].style.display === "none") {
      x[1].style.display = "flex";
      y[1].style.transform = "rotate(-135deg)";
    } else {
      x[1].style.display = "none";
      y[1].style.transform = "rotate(45deg)";
    }
  }
  return (
    <nav>
      <div className="logo">logo</div>

      <ul className="list">
        <li style={colorw} className="profile" onClick={dropProfile} id="a">
          <button className="dropbtn">
            <p>
              <FontAwesomeIcon icon={faUser} size="2x" />
              <i className="arrow down"></i>
            </p>
          </button>

          <div className="profilelinks">
            <div className="profilelink">
              <Link to="/myposts">My Posts</Link>
            </div>
            <div className="profilelink">
              <Link to="/myrequests">My requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/receivedrequests">Received Requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/myprofile">My Profile</Link>
            </div>
            <div className="profilelink">
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </li>
        <Link to="/home">
          <li style={colorw}>Home</li>
        </Link>
        <Link to="/Events">
          <li style={colorw}>
            <p>Events</p>
          </li>
        </Link>
        <Link to="/Challenges">
          <li style={colorw}>Challenges</li>
        </Link>
        <Link to="/Teamup">
          <li style={colorw}>Teamup</li>
        </Link>
        <Link to="/Internships">
          <li style={colorw}>Internships</li>
        </Link>

        <li style={colorw} className="profile" onClick={dropProfile1} id="b">
          <button className="dropbtn">
            <p>
              <FontAwesomeIcon icon={faUser} size="2x" />
              <i className="arrow down"></i>
            </p>
          </button>

          <div className="profilelinks">
            <div className="profilelink">
              <Link to="/myposts">My Posts</Link>
            </div>
            <div className="profilelink">
              <Link to="/myrequests">My requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/receivedrequests">Received Requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/myprofile">My Profile</Link>
            </div>
            <div className="profilelink">
              <Link to="/logout">Logout</Link>
            </div>
          </div>
        </li>
      </ul>
      <div className="lines" onClick={myFunction}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
