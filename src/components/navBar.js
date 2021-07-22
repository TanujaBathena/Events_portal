import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

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

      //   x[0].style.animation ="mymove 1s ";
    } else {
      x[0].style.display = "none";
      x[0].style.animation = "mymove1 0.5s ";
      y[0].style.transform = "rotate(45deg)";
      // setTimeout(function(){  x[0].style.display ="none"; }, 200);
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
        <li className="profile" onClick={dropProfile} id="a">
          <button className="dropbtn">
            <p>
              <i class="far fa-user-circle fa-1x"></i>
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
              <Link to="/receivedrequests">received requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/myprofile">my profile</Link>
            </div>
            <div className="profilelink">
              <Link to="/logout">logout</Link>
            </div>
          </div>
        </li>
        <Link to="/home">
          <li>home</li>
        </Link>
        <Link to="/Events">
          <li>
            <p>Events</p>
          </li>
        </Link>
        <Link to="/Challenges">
          <li>Challenges</li>
        </Link>
        <Link to="/Teamup">
          <li>Teamup</li>
        </Link>
        <Link to="/Internships">
          <li>Internships</li>
        </Link>

        <li className="profile" onClick={dropProfile1} id="b">
          <button className="dropbtn">
            <p>
              <i class="far fa-user-circle fa-2x"></i>
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
              <Link to="/receivedrequests">received requests</Link>
            </div>
            <div className="profilelink">
              <Link to="/myprofile">my profile</Link>
            </div>
            <div className="profilelink">
              <Link to="/logout">logout</Link>
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

Navbar.propTypes = {};

export default Navbar;
