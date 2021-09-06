import React from 'react';
import "../styles/slideshow.css"
import laptop from "../laptop.png"
import {Slide} from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'

const PauseHoverExample = () => {
  const images = [
    laptop,
    laptop,
    laptop
  ];

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true
  };

  return (
    <div style={{width:"100%",height:"400px",marginTop:"70px",zIndex:"-1"}}>
      <div className="slide-container" >
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img src={laptop} />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src="https://i.ibb.co/QDy827D/ak-logo.png" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img src="https://i.ibb.co/QDy827D/ak-logo.png" />
            </div>
          </div>
        </Slide>
      </div> 
    </div>
  );
};

export default PauseHoverExample;