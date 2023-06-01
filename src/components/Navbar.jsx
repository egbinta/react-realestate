import { useState, useEffect } from "react";
import MenuDropDown from "./MenuDropDown";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarMenuItem from "./NavbarMenuItem";

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const toggleDropDown = () => {
    setShowDropDown((current) => !current);
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div
      className="mx-auto px-7 md:px-16 py-4 bg-slate-200 drop-shadow-md mb-2"
      style={{ background: "cornflowerblue" }}
    >
      <div className="flex justify-between  text-black items-center cursor-pointer">
        <Link to={"/"} className="border p-0.5 pointer">
          <span className="bg-blue-700 text-white font-extrabold pb-0.5 px-1.5">
            REAL
          </span>
          <span className="pl-1 font-bold text-white">ESTATE</span>
        </Link>
        {screenSize.width <= 768 ? (
          <div className="relative inline-block">
            <FaBars className="text-white" onClick={toggleDropDown} />
            {showDropdown && <MenuDropDown />}
          </div>
        ) : (
          <div>
            <NavbarMenuItem />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
