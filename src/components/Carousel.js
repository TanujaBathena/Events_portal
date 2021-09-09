import slide0 from "../photos/slide0.png";
import slide1 from "../photos/slide1.jpg";
import slide2 from "../photos/slide2.jpg";
import slide3 from "../photos/slide3.jpg";
import slide4 from "../photos/slide4.jpg";
import slide5 from "../photos/slide5.jpg";
import slide6 from "../photos/slide6.jpg";
import slide7 from "../photos/slide7.jpg";
import React from "react";
import Carousel from "nuka-carousel";
import "../styles/imgs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Slides = () => {
  return (
    <Carousel
      speed={300}
      autoplay={true}
      pauseOnHover={true}
      swiping={true}
      //   decorators={Decorators}
      //   cellAlign={"center"}
      //   heightMode={"max"}
      //   //   cellSpacing={200}
      //   //   width={"100%"}
      //   frameOverflow={"hidden"}
      //   initialSlideHeight={10}
      renderCenterLeftControls={({ previousSlide }) => (
        <button onClick={previousSlide} style={{ border: "0px" }}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button onClick={nextSlide} style={{ border: "0px" }}>
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
        </button>
      )}
    >
      <img className={"im"} src={slide0} alt="" />
      <img className={"im"} src={slide1} alt="" />
      <img className={"im"} src={slide2} alt="" />
      <img className={"im"} src={slide3} alt="" />
      <img className={"im"} src={slide4} alt="" />
      <img className={"im"} src={slide5} alt="" />
      <img className={"im"} src={slide6} alt="" />
      <img className={"im"} src={slide7} alt="" />
    </Carousel>
  );
  // }
};
export default Slides;
