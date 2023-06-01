import React from "react";
import { Link } from "react-router-dom";

const NavbarMenuItem = () => {
  return (
    <div>
      <ul className="flex flex-end text-white">
        <Link to="/" className="px-2 font-medium">
          Home
        </Link>
        <Link to="/search" className="px-2 font-medium">
          Search
        </Link>
        <Link to="/search?purpose=for-sale" className="px-2 font-medium">
          Buy Property
        </Link>
        <Link to="/search?purpose=for-rent" className="px-2 font-medium">
          Rent Property
        </Link>
      </ul>
    </div>
  );
};

export default NavbarMenuItem;
