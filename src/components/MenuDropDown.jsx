import React from "react";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { DiGoogleAnalytics } from "react-icons/di";
import { FiKey } from "react-icons/fi";

const MenuDropDown = ({ onCancil }) => {
  return (
    <div
      className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <Link
          to="/"
          className="flex flex-row items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          passhref
        >
          <FcHome className="mr-3" />
          Home
        </Link>
        <Link
          to="/search"
          className="flex flex-row items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          role="menuitem"
          tabindex="-1"
          id="menu-item-1"
          passhref
        >
          <FaSistrix className="mr-3" />
          Search
        </Link>
        <Link
          to="/search?purpose=for-sale"
          className="flex flex-row items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
          passhref
        >
          <DiGoogleAnalytics className="mr-3" />
          Buy Property
        </Link>
        <Link
          to="/search?purpose=for-rent"
          className="flex flex-row items-center text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
          role="menuitem"
          tabindex="-1"
          id="menu-item-2"
          passhref
        >
          <FiKey className="mr-3" />
          Rent Property
        </Link>
      </div>
    </div>
  );
};

export default MenuDropDown;
