import React from "react";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed flex h-16 pt-2 shadow-md w-full md:justify-between items-center px-1 md:px-4 z-10 bg-white">
      <Link to={"/"}>
        <div>
          <img className="w-25 h-14 items-center pb-1" src={logo} alt="" />
        </div>
      </Link>
      <nav className="flex md:justify-between items-center">
        <Link to={"/home"} className="px-1 md:px-2 text-xl">
          Home
        </Link>
        <Link to={"/menu"} className="px-1 md:px-2 text-xl">
          Menu
        </Link>
        <Link to={"/about"} className=" px-1 md:px-2 text-xl">
          About
        </Link>
        <Link to={"/contact"} className="px-1 md:px-2 text-xl">
          Contact
        </Link>
      </nav>
      <div className="flex items-center">
        <div className="text-2xl md:text-5xl md:mr-6 relative">
          <Link to={"/cart"}>
            <FaCartShopping />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 md:h-6 md:w-6 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              0
            </div>
          </Link>
        </div>
        <div className="">
          <div className="ext-2xl md:text-5xl md:px-4">
            <FaRegUserCircle onClick={() => setShowMenu(!showMenu)} />
          </div>
          {showMenu && (
            <div className="absolute shadow-md p-2 right-2 ">
              <Link to={"/add"} onClick={() => setShowMenu(!showMenu)}>
                <div className="py-1 text-xl whitespace-nowrap">
                  Add Product
                </div>
              </Link>
              <Link to={"/register"} onClick={() => setShowMenu(!showMenu)}>
                <div className="text-xl whitespace-nowrap">Register</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
