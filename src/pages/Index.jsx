import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import Property from "../components/Property";
import ForSaleBanner from "../components/ForSaleBanner";
import classes from "../components/Index.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

function Index() {
  const [propertyForRent, setPropertyForRent] = useState([]);
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isLoading, setIsLoading] = useState(true);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    //setIsLoading(true);
    // axios
    //   .get("https://bayut.p.rapidapi.com/properties/list", {
    //     params: {
    //       locationExternalIDs: "5002",
    //       purpose: "for-rent",
    //       hitsPerPage: "1",
    //     },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
    //       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    //     },
    //   })
    //   .then((response) => {
    //     setPropertyForRent(response.data.hits);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });
    // const res = axios
    //   .get("https://bayut.p.rapidapi.com/properties/list", {
    //     params: {
    //       locationExternalIDs: "5002",
    //       purpose: "for-sale",
    //       hitsPerPage: "1",
    //     },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
    //       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    //     },
    //   })
    //   .then((res) => {
    //     setPropertyForSale(res.data.hits);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });

    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log("rent", propertyForRent);
  console.log("buy", propertyForSale);

  // if (isLoading) {
  //   return <LoadingSpinner />;
  // }

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}

export default Index;
