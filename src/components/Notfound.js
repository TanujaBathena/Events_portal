import React from "react";
// import Slideshow from "./Slideshow";
import Slideshow2 from "./Carousel";

const Notfound = () => {
  return (
    <>
      <Slideshow2 />
      <div style={{ marginLeft: "40vw", marginTop: "50vh" }}>
        <h1>
          404 <b>Page Not Found</b>
        </h1>
      </div>
    </>
  );
};

export default Notfound;
