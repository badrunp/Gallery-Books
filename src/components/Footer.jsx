import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900/80 text-center py-8">
      <span className="block text-xs text-gray-300">
        &copy; {new Date().getFullYear()} Muhammad Badrun All Rights Reversed.
      </span>
    </div>
  );
}

export default Footer;
