import React from "react";
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice.js";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const userData = useSelector((state) => state.user.user);
  // // console.log(userData);
  const dispatch = useDispatch();

  // I will handle logout through jwtTokens
  const token = localStorage.getItem("token");
  // console.log(token);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    toast("successfully logout");
  };

  const role = localStorage.getItem("role");

  return (
    <div className="fixed flex h-16 pt-2 shadow-md w-full md:justify-between items-center px-1 md:px-4 z-10 bg-white">
      <Link to={"/home"}>
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
              {role ? (
                <Link to={"/addProduct"} onClick={() => setShowMenu(!showMenu)}>
                  <div className="py-1 text-xl whitespace-nowrap">
                    Add Product
                  </div>
                </Link>
              ) : (
                <Link to={"/login"} onClick={() => setShowMenu(!showMenu)}>
                  <div className="py-1 text-xl whitespace-nowrap">
                    Login
                  </div>
                </Link>
              )}
              {token ? (
                <Link to={"/home"} onClick={() => setShowMenu(!showMenu)}>
                  <div
                    className="text-xl whitespace-nowrap"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </Link>
              ) : (
                <Link to={"/register"} onClick={() => setShowMenu(!showMenu)}>
                  <div className="text-xl whitespace-nowrap">Register</div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
