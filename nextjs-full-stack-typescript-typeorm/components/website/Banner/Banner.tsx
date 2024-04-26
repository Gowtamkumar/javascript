import React from "react";
import Sidebar from "./Sidebar";
import AntCarousel from "./Carousel";


export default function Banner() {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6 justify-center items-center">
          <AntCarousel />
        </div>
      </div>
    </>
  );
}
