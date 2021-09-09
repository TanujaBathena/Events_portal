import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import campus_logo from "../photos/iit-goa-logo.svg"

const Navbar = (props) => {
  const myFunction = function () {
    var x = document.getElementsByClassName("list");
    var y = document.getElementsByClassName("lines");
    if (x[0].style.display === "none") {
      x[0].style.display = "flex";
      y[0].style.backgroundColor = "rgba(1,1,1,0.5)";
      x[0].style.animation = "mymove 0.3s ";
    } else {
      x[0].style.animation = "mymove1 0.3s ";
      setTimeout(function () {
        x[0].style.display = "none";
      }, 200);
      y[0].style.backgroundColor = "";
    }
  };
  window.addEventListener("resize", function (event) {
    if (window.innerWidth >= 800) {
      var x = document.getElementsByClassName("list");
      if (x[0].style.display !== "flex") {
        x[0].style.display = "flex";
      }
    }
  });
  window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 768) {
      var x = document.getElementsByClassName("list");
      if (x[0].style.display === "flex") {
        x[0].style.display = "none";
      }
    }
  });
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
      <div className="logo">
        <img src={campus_logo} alt="" style={{marginLeft:"0px",width:"60px",height:"60px",borderRadius:"50%"}}/>
        <span style={{textAlign:"center"}}>IIT GOA</span>
      </div>

      <ul className="list">
        <li className="profile colorw" onClick={dropProfile} id="a">
          <button className="dropbtn">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <i className="arrow down"></i>
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
          <li className="colorw">Home</li>
        </Link>
        <Link to="/Events">
          <li className="colorw">
            <p>Events/Challenges</p>
          </li>
        </Link>
        {/* <Link to="/Challenges">
          <li className="colorw">Challenges</li>
        </Link> */}
        <Link to="/Teamup">
          <li className="colorw">Teamup</li>
        </Link>
        <Link to="/Internships">
          <li className="colorw int">Internships</li>
        </Link>

        <li className="profile colorw" onClick={dropProfile1} id="b">
          <button className="dropbtn">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <i className="arrow down"></i>
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
