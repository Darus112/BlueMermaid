import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { TbCaretLeft, TbCaretRight } from "react-icons/tb";

import SliderCard from "./SliderCard";
import { buttonClick } from "../animation";

export default function Slider() {
  const products = useSelector((state) => state.products);
  const [specials, setSpecials] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const sliderContainerRef = useRef(null);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event) => {
        const x = event.pageX - sliderContainerRef.current.offsetLeft;
        const distance = x - startX;
        sliderContainerRef.current.scrollLeft = scrollLeft - distance;
      };
      const handleMouseUp = () => {
        setIsDragging(false);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - sliderContainerRef.current.offsetLeft);
    setScrollLeft(sliderContainerRef.current.scrollLeft);
  };

  useEffect(() => {
    setSpecials(
      products?.filter((data) => data.product_category === "ourspecials")
    );
    console.log(specials);
  }, [products]);

  const handleScrollLeft = () => {
    sliderContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    sliderContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-auto relative">
      <div
        className="w-full h-auto flex items-center justify-between overflow-x-scroll scrollbar-none"
        ref={sliderContainerRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {specials &&
          specials.map((data, i) => (
            <SliderCard key={i} data={data} index={i} />
          ))}
      </div>
      <div className="hidden md:flex gap-3 items-center absolute -top-12 right-5">
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
