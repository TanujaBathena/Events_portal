import slide1 from "../photos/slide1.jpg"
import slide2 from "../photos/slide2.jpg"
import slide3 from "../photos/slide3.jpg"
import slide4 from "../photos/slide4.jpg"
import slide5 from "../photos/slide5.jpg"
import slide6 from "../photos/slide6.jpg"
import slide7 from "../photos/slide7.jpg"
import React from "react"
import Carousel from "nuka-carousel"

const Slides=()=>{
        return (
        <Carousel speed={300} autoplay={true} pauseOnHover={true} swiping={true} heightMode={"max"}>
            <img src={slide1} alt=""/>
            <img src={slide2} alt=""/>
            <img src={slide3} alt=""/>
            <img src={slide4} alt=""/>
            <img src={slide5} alt=""/>
            <img src={slide6} alt=""/>
            <img src={slide7} alt=""/>
        </Carousel>
        )
    // }
};
export default Slides;
