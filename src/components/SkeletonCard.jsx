import React from "react";

function SkeletonCard() {
  return (
    <div className="flex">
      <div className="h-[220px] w-[160px] box flex-none rounded-sm"></div>
      <div className="p-4 w-full">
        <div className="h-5 rounded-sm w-full sm:w-[180px] box"></div>
        <div className="h-3 rounded-sm w-[100px] box mt-2"></div>
        <div className="h-4 rounded-sm w-full box mt-4"></div>
        <div className="h-4 rounded-sm w-2/3 box mt-2"></div>
        <div className="h-4 rounded-sm w-1/3 box mt-2"></div>
        <div className="h-6 rounded-sm w-1/3 sm:w-1/5 box mt-6"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
