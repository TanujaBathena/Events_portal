import React from "react";
import "../styles/slideshow.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../photos/slide1.jpg";
import slide2 from "../photos/slide2.jpg";
import slide3 from "../photos/slide3.jpg";
import slide4 from "../photos/slide4.jpg";
import slide5 from "../photos/slide5.jpg";
import slide6 from "../photos/slide6.jpg";
import slide7 from "../photos/slide7.jpg";

const PauseHoverExample = () => {
  //   const images = [lslide1,slide2,slide3,];

  const fadeProperties = {
    duration: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        <Slide {...fadeProperties}>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide1} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide2} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide3} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide4} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide5} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide6} alt="" />
            </div>
          </div>
          <div className="each-fade">
            <div>
              <img className="sidepic" src={slide7} alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PauseHoverExample;
