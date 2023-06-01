import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiFilter } from "react-icons/bi";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import axios from "axios";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [properties, setProperties] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();

  const purpose = query.get("purpose") || "for-rent";
  const rentFrequency = query.get("rentFrequency") || "yearly";
  const minPrice = query.get("minPrice") || "0";
  const maxPrice = query.get("maxPrice") || "1000000";
  const roomsMin = query.get("roomsMin") || "0";
  const bathsMin = query.get("bathsMin") || "0";
  const sort = query.get("sort") || "price-desc";
  const areaMax = query.get("areaMax") || "35000";
  const locationExternalIDs = query.get("locationExternalIDs") || "5002";
  const categoryExternalID = query.get("categoryExternalID") || "4";

  useEffect(() => {
    axios
      .get("https://bayut.p.rapidapi.com/properties/list", {
        params: {
          locationExternalIDs: locationExternalIDs,
          purpose: purpose,
          hitsPerPage: "3",
          page: "0",
          lang: "en",
          sort: sort,
          minPrice: minPrice,
          areaMax: areaMax,
          maxPrice: maxPrice,
          bathsMin: bathsMin,
          roomsMin: roomsMin,
          rentFrequency: rentFrequency,
          categoryExternalID: categoryExternalID,
        },
        headers: {
          "X-RapidAPI-Key":
            "499fbc6e61msh790dad8a6509f03p1cb807jsn9db05b7e546c",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      })
      .then((response) => {
        setProperties(response.data.hits);
      })
      .then((error) => {
        console.log(error.Message);
      });
  }, [
    areaMax,
    bathsMin,
    categoryExternalID,
    locationExternalIDs,
    roomsMin,
    categoryExternalID,
    purpose,
  ]);

  return (
    <div>
      <div
        className="flex justify-center items-center bg-gray-100 border-t-2 border-b-2 border-blue-200 p-2 font-black cursor-pointer"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        Search Properties By Filters
        <BiFilter className="ml-1 font-bold text-2xl" />
      </div>
      {searchFilters && <SearchFilters />}
      <div className="container mx-auto px-4 py-8 text-2xl font-bold">
        <p>Properties {query.get("purpose")}</p>
      </div>
      <div className="container mx-auto px-18 py-10 md:px-10">
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      </div>
      <div>
        {properties.length === 0 && (
          <div className="flex flex-col justify-center items-center mt-16">
            <img src="./img/noResult.svg" alt="No result" />
            <p className="text-2xl mt-3">No Result Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
