import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";

const ForSaleBanner = ({ purpose, title, desc, buttonText, imgUrl }) => {
  return (
    <>
      <div className="grid gap-y-2 md:gap-none md:grid-cols-2">
        <Slide className="bg-cover bg-center text-center relative">
          <img
            src="./img/buyHomeImage1.jpg"
            alt="property"
            style={{
              backgroundImage: "./img/buyHomeImage1.jpg",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
          <img
            src="./img/home-buy.jfif"
            alt="property"
            style={{
              backgroundImage: "./img/home-buy.jfif",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
          <img
            src="./img/home-buy-1.jfif"
            alt="property"
            style={{
              backgroundImage: "./img/home-buy-1.jfif",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
          <img
            src="./img/home-buy-2.jfif"
            alt="property"
            style={{
              backgroundImage: "./img/home-buy-2.jfif",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
          <img
            src="./img/home-buy-3.jfif"
            alt="property"
            style={{
              backgroundImage: "./img/home-buy-3.jfif",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
          <img
            src="./img/home-buy-4.jpg"
            alt="property"
            style={{
              backgroundImage: "./img/home-buy-4.jfif",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "350px",
            }}
          />
        </Slide>
        <div className="bg-gray-200 py-5 md:pt-10">
          <div className="flex flex-col text-center">
            <span className="font-medium font-bold text-4xl text-black pb-4">
              {purpose}
            </span>
            <span className="font-medium font-sm text-3xl text-black pb-3">
              {title}
            </span>
            <span className="font-medium font-md text-lg text-black pb-2">
              {desc}
            </span>
          </div>
          <Link
            to={"/search?purpose=for-sale"}
            className="flex justify-center pt-2"
          >
            <button className="p-3 rounded-md bg-blue-600 text-white font-bold ">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForSaleBanner;
