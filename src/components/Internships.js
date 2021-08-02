import React from "react";
import InternshipCards from "./InternshipCards";
import "../styles/card.css";
import "../styles/container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom';
const Internships = () => {
  return (
    <div className="container">
          <div className="heading1">
            <p className="teamup">Internship Portal</p>
             <p className="content">You can find valuable internships and many opportunities here! </p>
            <span style={{marginTop:"5%",fontSize:"20px"}}>Add Your Post Below</span>
            <Link to="/Internships/form">
              <button className="bun">
                <FontAwesomeIcon  icon={faPlus} size="3x" />
              </button>
            </Link>
          </div>

      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
      <InternshipCards />
    </div>
  );
};

export default Internships;
