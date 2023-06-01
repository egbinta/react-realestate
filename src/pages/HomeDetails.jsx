import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { millify } from "millify";
import axios from "axios";
import ImageScrollbar from "../components/ImageScrollbar";

const HomeDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);

  // const useQuery = () => {
  //   return new URLSearchParams(useLocation().search);
  // };
  // const query = useQuery();
  // const detailId = query.get("externalId");
  // console.log(detailId);
  const externalIdValue = useParams();
  const externalId = externalIdValue.externalId;

  useEffect(() => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/detail", {
        params: { externalID: externalId },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyDetails(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [externalId]);

  console.log(propertyDetails);

  return (
    <div className="container mx-auto mb-8 w-5/6 md:w-8/12 lg:w-8/12  px-2">
      {propertyDetails.photos && (
        <ImageScrollbar data={propertyDetails.photos} />
      )}
      <div className="flex justify-between align-center mt-2">
        <div className="flex align-center">
          <div className="text-2xl text-green-500">
            {propertyDetails.isVerified && <IoCheckmarkCircleSharp />}
          </div>
          <div className="font-small text-md ml-2">
            ${millify(propertyDetails.price)}
            {propertyDetails.rentFrequency &&
              `/${propertyDetails.rentFrequency}`}
          </div>
        </div>
        <div>
          <img
            className="rounded-full"
            src={propertyDetails.agency?.logo?.url}
            style={{ width: "45px", height: "45px" }}
            alt="agency"
          />
        </div>
      </div>
      <div className="flex justify-start items-center text-blue-400">
        <div className="flex items-center mr-2">
          <div>{propertyDetails.rooms}</div>
          <div className="ml-1">
            <FaBed className="text-blue-300" />
          </div>
        </div>{" "}
        |
        <div className="flex items-center mx-2">
          <div>{propertyDetails.baths}</div>
          <div className="ml-1">
            <FaBath className="text-blue-300" />
          </div>
        </div>{" "}
        |
        <div className="flex items-center mx-2">
          <div>{millify(propertyDetails.area)} sqft </div>
          <div className="ml-1">
            <FaTh className="text-blue-300" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-md text-gray-700 font-black">
          {propertyDetails.title}
        </div>
        <div className="text-md text-justify text-gray-600 leading-7 mt-2">
          {propertyDetails.description}
        </div>
      </div>
      <div className="flex flex-wrap justify-between uppercase">
        <div className="flex justify-between w-96 border-gray-400 p-3">
          <p>Type</p>
          <p className="font-bold">{propertyDetails.type}</p>
        </div>
        <div className="flex justify-between w-96 border-gray-400 p-3">
          <p>Purpose</p>
          <p className="font-bold">{propertyDetails.purpose}</p>
        </div>
        {propertyDetails.furnishingStatus && (
          <div className="flex justify-between w-96 border-gray-400 p-3">
            <p>Furnishing Staus</p>
            <p className="font-bold">{propertyDetails.furnishingStatus}</p>
          </div>
        )}
      </div>
      {/* <div>
        {propertyDetails.amenities && (
          <p className="text-2xl font-black mt-4">Amenities</p>
        )}
        <span className="flex flex-wrap">
          {propertyDetails.amenities.map((item) =>
            item.amenities.map((amenity) => (
              <span
                className="jtstify-center text-center font-l rounded-md text-blue-400 bg-gray-200 m-1 p-2"
                key={amenity.text}
              >
                {amenity.text}
              </span>
            ))
          )}
        </span>
      </div> */}
    </div>
  );
};

export default HomeDetails;
