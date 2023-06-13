import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { TbCaretLeft, TbCaretRight } from "react-icons/tb";

import SliderCard from "./SliderCard";
import { buttonClick } from "../animation";

export default function Slider() {
  const products = useSelector((state) => state.products);
  const [specials, setSpecials] = useState(null);

  const sliderContainerRef = useRef(null);

  useEffect(() => {
    setSpecials(
      products?.filter((data) => data.product_category === "ourspecial")
    );
    console.log(specials);
  }, [products]);

  const handleScrollLeft = () => {
    sliderContainerRef.current.scrollBy({
      left: -300,
    });
  };

  const handleScrollRight = () => {
    sliderContainerRef.current.scrollBy({
      left: 300,
    });
  };

  return (
    <div className="w-full h-auto relative">
      <div
        className="w-full h-auto flex items-center justify-between overflow-x-scroll scrollbar-none scroll-smooth"
        ref={sliderContainerRef}
      >
        {specials &&
          specials.map((data, i) => (
            <SliderCard key={i} data={data} index={i} />
          ))}
      </div>
      <div className="flex gap-3 items-center absolute -top-12 right-5">
        <motion.div
          {...buttonClick}
          whileHover={{ scale: 1.03 }}
          className="w-8 h-8 rounded-lg bg-gradient-to-tr from-seagull-300 to-[#75dfff] 
          cursor-pointer hover:shadow-lg flex items-center justify-center"
          onClick={handleScrollLeft}
        >
          <TbCaretLeft className="text-lg text-white" />
        </motion.div>
        <motion.div
          {...buttonClick}
          whileHover={{ scale: 1.03 }}
          className="w-8 h-8 rounded-lg bg-gradient-to-tr from-seagull-300 to-[#75dfff] 
          cursor-pointer hover:shadow-lg flex items-center justify-center"
          onClick={handleScrollRight}
        >
          <TbCaretRight className="text-lg text-white" />
        </motion.div>
      </div>
    </div>
  );
}
