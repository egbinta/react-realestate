import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import HouseForRent from "../components/HouseForRent";
import HouseForSale from "../components/HouseForSale";

function Index() {
  const [propertyForRent, setPropertyForRent] = useState([]);
  const [propertyForSale, setPropertyForSale] = useState([]);
  useEffect(() => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/list", {
        params: {
          locationExternalIDs: "5002",
          purpose: "for-rent",
          hitsPerPage: "2",
        },
        headers: {
          "X-RapidAPI-Key":
            "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyForRent(response.data.hits);

        //console.log("rent", response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });

    // const res = axios
    //   .get("https://bayut.p.rapidapi.com/properties/list", {
    //     params: {
    //       locationExternalIDs: "5002",
    //       purpose: "for-sale",
    //       hitsPerPage: "10",
    //     },
    //     headers: {
    //       "X-RapidAPI-Key":
    //         "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
    //       "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    //     },
    //   })
    //   .then((res) => {
    //     setPropertyForSale(res.data.hits);
    //     console.log("rent", propertyForSale);
    //   })
    //   .catch((error) => {
    //     console.log(error.data);
    //   });
  }, []);

  console.log(propertyForRent);

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
            <HouseForRent key={property.id} property={property} />
          ))}
        </div>
      </div>
      <Banner
        imgUrl={`url("./img/buyHomeImage1.jpg")`}
        purpose={"BUY A HOME"}
        title={"Find, Buy & Own Your Dream Home"}
        desc={"Explore Apartments, Villers, Homes and more"}
        buttonText={"Explore Buying"}
      />

      {/* House for rent  */}
      <div className="container mx-auto px-18 py-10 md:px-10">
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {propertyForSale.map((property) => (
            <HouseForSale key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
