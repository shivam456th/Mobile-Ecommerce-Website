import React, { useContext, useState } from "react";
import { SlGlobe } from "react-icons/sl";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import Logo from "../assets/icons8-logo.svg";
import { Link } from "react-router-dom";
import { Context } from "../Store";

const Navbar = () => {
  const { Cart } = useContext(Context);
  return (
    <div className="flex py-4 md:px-10 px-2 items-center justify-between">
      <img src={Logo} alt="Logo" className="w-10 h-10" />
      <div className=" items-center md:flex hidden">
        <input
          className="py-2 px-4 bg-[#E1E3E5] w-[35rem] rounded-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="text"
          placeholder="Search product..."
        />
        <button className="ml-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300">
          Enter
        </button>
      </div>
      <div className="flex items-center text-black ">
        <SlGlobe className=" text-2xl mr-4 cursor-pointer" />
        <Link to={"/addtocart"} className="relative flex items-center mx-2">
          {/* Shopping Cart Icon */}
          <CiShoppingCart className="text-2xl cursor-pointer text-gray-800 hover:text-gray-900 transition-colors duration-300" />

          {/* Badge */}
          {Cart.length > 0 && (
            <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
              {Cart.length}
            </span>
          )}
        </Link>

        <IoIosMenu className=" text-2xl cursor-pointer" />

        {/* <IoSunnyOutline className='' />          */}
      </div>
    </div>
  );
};

export default Navbar;
