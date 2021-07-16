import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const myFunction = function () {
    var x = document.getElementsByClassName("list");
    var y = document.getElementsByClassName("lines");
    if (x[0].style.display === "none") {
      x[0].style.display = "flex";
      y[0].style.backgroundColor = "red";
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
              Profile<i className="arrow down"></i>
            </p>
          </button>

          <div className="profilelinks">
            <div className="profilelink">
            <a href="">My posts</a>
            </div>
            <div className="profilelink">
              <a href="">My requests</a>
            </div>
            <div className="profilelink">
              <a href="">Received Requests</a>
            </div>
            <div className="profilelink">
              <a href="">My Profile</a>
            </div>
            <div className="profilelink">
              <a href="">LogOut</a>
            </div>
          </div>
        </li>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/Events">
          <li>Events</li>
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
              profile<i className="arrow down"></i>
            </p>
          </button>

          <div className="profilelinks">
            <div className="profilelink">
              <a href="">My Posts</a>
            </div>
            <div className="profilelink">
              <a href="">My requests</a>
            </div>
            <div className="profilelink">
              <a href="">Received Requests</a>
            </div>
            <div className="profilelink">
              <a href="">My Profile</a>
            </div>
            <div className="profilelink">
              <a href="">LogOut</a>
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
