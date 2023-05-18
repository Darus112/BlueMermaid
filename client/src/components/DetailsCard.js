import React from "react";

import { TbClockHour3 } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

export default function DetailsCard() {
  return (
    <div className="flex flex-wrap gap-12 items-center justify-center ">
      <div
        className="w-48 h-48 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
      >
        <div className="flex flex-col items-center justify-center gap-y-3">
          <TbClockHour3 className="text-white text-6xl drop-shadow-lg" />
          <p className="font-body font-bold text-seagull-700 text-xl drop-shadow-lg">
            10 AM - 7 PM
          </p>
          <p className="font-body text-seagull-700 text-lg drop-shadow-lg">
            Opening Hour
          </p>
        </div>
      </div>
      <div
        className="w-48 h-48 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
      >
        <div className="flex flex-col items-center justify-center gap-y-3">
          <IoLocationOutline className="text-white text-6xl drop-shadow-lg" />
          <p
            className="font-body font-bold text-seagull-700 text-lg text-center"
            drop-shadow-lg
          >
            GEC Circle, Barcelona, Seafood
          </p>
          <p className="font-body text-seagull-700 text-lg drop-shadow-lg">
            Address
          </p>
        </div>
      </div>
      <div
        className="w-48 h-48 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
      >
        <div className="flex flex-col items-center justify-center gap-y-3">
          <FiPhoneCall className="text-white text-6xl drop-shadow-lg" />
          <p className="font-body font-bold text-seagull-700 text-xl drop-shadow-lg">
            +344452156345
          </p>
          <p className="font-body text-seagull-700 text-lg drop-shadow-lg">
            Call Now
          </p>
        </div>
      </div>
    </div>
  );
}
