import React from "react";
import ArrowLeft from "../icon/ArrowLeft";
import FingerPrint from "../icon/FingerPrint";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

function NavbarGuest() {
  return (
    <div className="bg-transparent absolute w-full text-gray-200 left-0 top-0 flex items-center justify-between py-6 sm:py-8 px-8 sm:px-12">
      <m.div
        whileHover={{ scale: 1.03, x: -8 }}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        className="cursor-pointer"
      >
        <Link to="/" className="flex items-center space-x-2 ">
          <ArrowLeft className="w-6 h-6" />
          <p className="text-sm">Kembali</p>
        </Link>
      </m.div>
      <m.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
      >
        <div className="flex items-center space-x-2">
          <FingerPrint className="w-7 sm:w-9 h-7 sm:h-9" />
          <h1 className="text-2xl sm:text-3xl font-bold">Gallery Book</h1>
        </div>
      </m.div>
    </div>
  );
}

export default NavbarGuest;
