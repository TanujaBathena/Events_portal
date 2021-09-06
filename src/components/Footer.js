import React from 'react'
import "../styles/footer.css"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div className="footbox">
            <div className="boxf">
                <div className="aboutIIT">
                    <img src="https://i.ibb.co/QDy827D/ak-logo.png" style={{marginLeft:"20px",width:"200px",height:"200px",borderRadius:"50%"}}/>
                    <div className="linki">
                        <button className="bun">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </button>
                        <button className="bun">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </button>
                        <button className="bun">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </button>
                        <button className="bun">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </button>
                    </div>

                </div>
                <div className="linksf">
                    <span className="heads">Links</span>
                        <Link to="/home">
                           <span className="ls">Home</span>
                        </Link>
                        <Link to="/Events">
                            <span className="ls">Events</span>
                        </Link>
                        {/* <Link to="/Challenges">
                        <li >Challenges</li>
                        </Link> */}
                        <Link to="/Teamup">
                            <span className="ls">Team Up</span>
                        </Link>
                        <Link to="/Internships">
                            <span className="ls">Internships</span>
                        </Link>
                </div>
            <div className="doneby">
                <span className="heads">Guided By</span>
                <span >Neha ma'am</span>
                <span className="heads">created By</span>
                    <span>Tanuja,Vishnu,Pranav,Noel</span>

                    
            </div>
          
            </div>
            <div className="copy">
                
            </div>


        </div>
    )
}

export default Footer
