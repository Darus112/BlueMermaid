import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { MdDinnerDining } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

import { statuses } from "../utils/styles";
import { buttonClick } from "../animation";
import SliderCard from "./SliderCard";

export default function FilterSection() {
  const [category, setCategory] = useState("breakfast");
  const products = useSelector((state) => state.products);

  return (
    <div className="w-full">
      <div
        className="w-full overflow-x-scroll pt-12 flex items-center 
  justify-center gap-6 py-8 scrollbar-none"
      >
        {statuses &&
          statuses.map((data, i) => (
            <FilterCard
              key={i}
              data={data}
              category={category}
              setCategory={setCategory}
              index={i}
            />
          ))}
      </div>
      <div className="mt-12 flex items-center justify-between gap-10">
        <div
          className="w-[700px] h-[3px] rounded-xl
        bg-gradient-to-r from-seagull-500 to-seagull-200"
        ></div>
        <IoRestaurantOutline className=" text-3xl text-seagull-200" />
        <div
          className="w-[700px] h-[3px] rounded-xl
        bg-gradient-to-l from-seagull-500 to-seagull-200"
        ></div>
      </div>
      <div className="w-ful flex items-center justify-evenly flex-wrap mt-12">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <SliderCard key={i} data={data} index={i} />)}
      </div>
    </div>
  );
}

export const FilterCard = ({ data, index, category, setCategory }) => {
  return (
    <motion.div
      {...buttonClick}
      whileHover={{ scale: 1.05 }}
      onClick={() => setCategory(data.category)}
      key={index}
      className={`group w-20 min-w-[100px] cursor-pointer rounded-lg py-6
      ${category === data.category ? "bg-seagull-300" : "bg-seagull-200"}
      hover:bg-seagull-300 shadow-lg hover:shadow-seagull-300
      flex flex-col items-center justify-center gap-4 border-none outline-none`}
    >
      <div
        className={`w-10 h-10 rounded-full shadow-lg flex
        items-center justify-center group-hover:bg-seagull-200
        ${category === data.category ? "bg-seagull-200" : "bg-seagull-300"}`}
      >
        <MdDinnerDining
          className={`${
            category === data.category ? "text-seagull-900" : "text-seagull-50"
          } group-hover:text-seagull-900`}
        />
      </div>
      <p
        className={`${
          category === data.category ? "text-seagull-50" : "text-seagull-900"
        } font-body group-hover:text-seagull-50 font-semibold text-sm`}
      >
        {data.title}
      </p>
    </motion.div>
  );
};
