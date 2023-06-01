import React from "react";
import { useState, useEffect } from "react";
import { filterData, getFilterValues } from "../utils/filterData";
import { Router } from "react-router-dom";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {
    const path = Router.pathname;
    const { query } = Router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      //query[item.name] = item.value;
      console.log(item.value);
    });

    Router.push({ pathname: path, query });
  };
  return (
    <div className="flex justify-around flex-wrap p-4 bg-gray-100">
      {filters.map((filter) => (
        <div key={filter.queryName} className="py-2">
          <select
            placeholder={filter.placeholder}
            className="w-40 p-2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
