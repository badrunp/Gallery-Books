import React from "react";
import { Link } from "react-router-dom";

function NavbarLink({ url = "/", className = "", children }) {
  return (
    <Link
      to={url}
      className={`px-3 sm:px-4 py-2 sm:py-2 text-xs sm:txt-sm font-semibold tracking-wide ${className} rounded-sm sm:rounded focus:outline-none flex items-center space-x-1 transition-colors`}
    >
      {children}
    </Link>
  );
}

export default NavbarLink;
