import React from "react";

function BgLabel({ active = false }) {
  return (
    <>
      <div
        className={`absolute ${active && "bg-gray-900"} w-full h-1/2 top-0`}
      ></div>
      <div className="absolute bg-gray-800 w-full h-1/2 bottom-0"></div>
    </>
  );
}

export default BgLabel;
