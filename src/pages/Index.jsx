import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import Property from "../components/Property";
import ForSaleBanner from "../components/ForSaleBanner";
import classes from "../components/Index.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorHandler from "../components/ErrorHandler";

function Index() {
  const [propertyForRent, setPropertyForRent] = useState([]);
  const [propertyForSale, setPropertyForSale] = useState([]);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const override = {
    display: "block",
    margin: "120px auto",
    borderColor: "green",
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bayut.p.rapidapi.com/properties/lis", {
        params: {
          locationExternalIDs: "5002",
          purpose: "for-rent",
          hitsPerPage: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyForRent(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setIsError(true);
      });
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

  if (loading) {
    return (
      <ClipLoader
        color={"#3f99a1"}
        cssOverride={override}
        loading={loading}
        size={100}
      />
    );
  }

  if (isError) {
    return <ErrorHandler />;
  }

  return (
    <div>
      <Banner
        imgUrl={`url("./img/rentHomeImage.jpg")`}
        purpose={"RENT A HOME"}
        title={"Rent homes for everyone"}
        desc={"Explore Apartments, Villers, Homes and more"}
        buttonText={"Explore Renting"}
      />
      {/* House for rent  */}
      <div className="container mx-auto px-18 py-10 md:px-10">
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {propertyForRent.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
      {screenSize.width <= 768 ? (
        <Banner
          className={classes.mobileBanner}
          imgUrl={`url("./img/buyHomeImage1.jpg")`}
          purpose={"BUY A HOME"}
          title={"Find, Buy & Own Your Dream Home"}
          desc={"Explore Apartments, Villers, Homes and more"}
          buttonText={"Explore Buying"}
        />
      ) : (
        <ForSaleBanner
          className={classes.descktopBanner}
          imgUrl={`url("./img/buyHomeImage1.jpg")`}
          purpose={"BUY A HOME"}
          title={"Find, Buy & Own Your Dream Home"}
          desc={"Explore Apartments, Villers, Homes and more"}
          buttonText={"Explore Buying"}
        />
      )}

      {/* House for sale  */}
      <div className="container mx-auto px-18 py-10 md:px-10">
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {propertyForSale.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
