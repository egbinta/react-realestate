import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useContext } from "react";
import { ScrollMenu, visibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageScrollbar = ({ data }) => {
  // const LeftArrow = () => {
  //   const scrollPrev = useContext(visibilityContext);

  //   return (
  //     <div className="justify-center items-center m-1">
  //       <span
  //         as={FaArrowAltCircleLeft}
  //         onClick={() => scrollPrev()}
  //         className="text-2xl cursor-pointer"
  //       />
  //     </div>
  //   );
  // };

  // const RightArrow = () => {
  //   const scrollNext = useContext(visibilityContext);

  //   return (
  //     <div className="justify-center items-center m-1">
  //       <span
  //         as={FaArrowAltCircleRight}
  //         onClick={() => scrollNext()}
  //         className="text-2xl cursor-pointer"
  //       />
  //     </div>
  //   );
  // };

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    backgroundSize: "cover",
    height: "450px",
  };

  const imageContainer = {
    background: "gray",
    maxwidth: "100%",
  };

  return (
    <Slide>
      {data.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.url} alt="property" />
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default ImageScrollbar;
