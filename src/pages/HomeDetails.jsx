import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const HomeDetails = () => {
  const [propertyDetails, setPropertyDetails] = useState(null);
  const params = useParams();
  const detailId = params.externalId;

  useEffect(() => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/detail", {
        params: { externalID: detailId },
        headers: {
          "X-RapidAPI-Key":
            "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setPropertyDetails(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  console.log(propertyDetails);
  return (
    <div>
      <div className="max-w-screen-lg mx-auto mt-3 ">
        <img src={propertyDetails.coverPhoto.url} alt="" />
      </div>
    </div>
  );
};

export default HomeDetails;
