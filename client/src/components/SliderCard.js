import React from "react";

import { motion } from "framer-motion";

import { IoBasket } from "react-icons/io5";
import { buttonClick } from "../animation";

export default function SliderCard({ data, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-seagull-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
    rounded-xl flex items-center justify-between relative px-5 py-5 
    w-full md:w-340 md:min-w-350 gap-3 mx-3 my-3"
    >
      <img
        src={data.imageURL}
        className="w-40 object-contain shadow-[0_3px_10px_rgb(0,0,0,0.2)]
        rounded-xl"
        alt=""
      />
      <div className="relative pt-5 pl-2">
        <p className="font-food text-xl font-semibold text-seagull-900">
          {data.product_name}
        </p>
        <p className="font-food text-base font-semibold text-seagull-300">
          <span className="text-xs">RON</span>{" "}
          {parseFloat(data.product_price).toFixed(2)}
        </p>
      </div>
      <motion.div
        {...buttonClick}
        className="w-7 h-7 rounded-full flex items-center justify-center
        absolute top-3 right-2 cursor-pointer
         bg-gradient-to-tr from-seagull-300 to-[#a4e6fa] hover:shadow-lg"
      >
        <IoBasket className="text-lg text-seagull-50" />
      </motion.div>
      <motion.div
        {...buttonClick}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-2 right-2 flex font-food text-xs font-semibold text-seagull-600 cursor-pointer"
      >
        Igredients
      </motion.div>
    </motion.div>
  );
}
