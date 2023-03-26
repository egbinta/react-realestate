import React from "react";
import { Link } from "react-router-dom";
import DefaultImage from "./DefaultImage";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { millify } from "millify";

const HouseForRent = ({
  property: {
    coverPhoto,
    price,
    title,
    area,
    rentFrequency,
    agency,
    rooms,
    baths,
    isVerified,
    externalID,
  },
}) => {
  return (
    <div>
      <Link to={`/homedetails/${externalID}`}>
        <img
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          style={{ width: "350px", height: "171px" }}
          alt="House"
        />
      </Link>
      <div className="flex justify-between align-center mt-2">
        <div className="flex align-center">
          <div className="text-2xl text-green-500">
            {isVerified && <IoCheckmarkCircleSharp />}
          </div>
          <div className="font-small text-md ml-2">
            ${millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </div>
        </div>
        <div>
          <img
            className="rounded-full"
            src={agency?.logo?.url}
            style={{ width: "45px", height: "45px" }}
            alt="agency"
          />
        </div>
      </div>
      <div className="flex justify-start items-center text-blue-400">
        <div className="flex items-center mr-2">
          <div>{rooms}</div>
          <div className="ml-1">
            <FaBed className="text-blue-300" />
          </div>
        </div>{" "}
        |
        <div className="flex items-center mx-2">
          <div>{baths}</div>
          <div className="ml-1">
            <FaBath className="text-blue-300" />
          </div>
        </div>{" "}
        |
        <div className="flex items-center mx-2">
          <div>{millify(area)} sqft </div>
          <div className="ml-1">
            <FaTh className="text-blue-300" />
          </div>
        </div>
      </div>
      <div className="text-md text-gray-500">
        {title.length > 40 ? title.substring(0, 35) + "..." : title}
      </div>
    </div>
  );
};

export default HouseForRent;
