import React from "react";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slider from "../components/Slider";

export default function Menu() {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <p className="font-content text-4xl font-bold">Explore our menu</p>
      <div className="flex flex-col items-start justify-start gap-1 mt-20">
        <p className="font-content text-2xl font-bold">Our Specials</p>
        <div
          className="w-20 h-1 rounded-md 
        bg-gradient-to-r from-seagull-300 to-[#95e9f8]"
        ></div>
      </div>

      <Slider />
    </div>
  );
}
