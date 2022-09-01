import React from "react";
import FingerPrint from "../icon/FingerPrint";
import { Link } from "react-router-dom";
import ArrowDown from "../icon/ArrowDown";
import UserPlus from "../icon/UserPlus";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-[56px] md:h-[64px] bg-gray-900/80 text-gray-200">
      <div className="flex items-center justify-between px-4 sm:px-0 container mx-auto h-full">
        <Link to="/" className="flex items-center space-x-1">
          <FingerPrint className="w-7 h-7 sm:w-8 sm:h-8" />
          <h1 className="text-base sm:text-2xl font-semibold">Gallery Book</h1>
        </Link>
        <div className="flex items-center space-x-3">
          <NavbarLink
            url="/login"
            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Login</span>
          </NavbarLink>
          <NavbarLink
            url="/register"
            className="bg-blue-600 hover:bg-blue-700 text-gray-200"
          >
            <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Register</span>
          </NavbarLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
