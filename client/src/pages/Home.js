import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import OurSpecialBg from "../assets/Img/Hero_bg.png";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdRoomService } from "react-icons/md";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { buttonClick } from "../animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state) => state.products);
  const [specials, setSpecials] = useState(null);

  useEffect(() => {
    setSpecials(
      products?.filter((data) => data.product_category === "ourspecials")
    );
    console.log(specials);
  }, [products]);

  return (
    <div className="flex flex-col">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
        <Fade left>
          <div className="flex flex-col items-center md:items-start justify-center gap-6 md:mr-32">
            <div className="px-4 py-1 flex items-center justify-center gap-2 bg-seagull-200 rounded-full">
              <div className="bg-seagull-50 w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                <MdRoomService className="text-seagull-400" />
              </div>
              <p className="font-body text-seagull-400 text-xs font-semibold">
                Best service & Fast delivery
              </p>
              <div className="bg-seagull-50 w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                <AiFillThunderbolt className="text-seagull-400" />
              </div>
            </div>

            <p
              className="text-[25px] text-seagull-900 md:text-[40px] font-content
          font-extrabold tracking-wider"
            >
              The Best Sevice and Delivery in{" "}
              <span className="text-seagull-300">Your City</span>
            </p>

            <p className="text-sm font-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to={"/menu"}>
              <motion.button
                {...buttonClick}
                whileHover={{ scale: 1.02 }}
                className=" bg-gradient-to-tr from-seagull-300 to-[#94e2fa]
            px-4 py-2 rounded-xl font-body text-white font-semibold"
              >
                Explore Menu
              </motion.button>
            </Link>
          </div>
        </Fade>
        <Fade right>
          <div className="py-2 flex-1 flex items-center justify-center md:justify-end relative">
            <img
              src={OurSpecialBg}
              alt=""
              className="w-auto h-650 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
            />

            <div
              className=" w-300 md:w-460 ml-0 grid grid-cols-2 md:flex md:flex-wrap
          items-center justify-center gap-4 gap-y-14 absolute -top-10"
            >
              {specials &&
                specials.map((data, i) => (
                  <div
                    key={i}
                    className="w-32 h-36 md:h-150 md:w-190 p-4 backdrop-blur-lg
              rounded-xl flex flex-col items-center justify-center drop-shadow-lg
              bg-seagull-300 bg-opacity-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-[2px]
              border-seagull-200"
                  >
                    <img
                      src={data.imageURL}
                      className="w-20 md:w-28 md:-mt-16 object-contain rounded-2xl
                    shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-[2px] border-seagull-200"
                      alt=""
                    />
                    <p
                      className="text-sm font-food md:text-lg font-semibold
                text-seagull-700 drop-shadow-xl"
                    >
                      {data.product_name.slice(0, 17)}
                    </p>
                    <p
                      className="text-base font-food font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                text-[#78cef0]"
                    >
                      <span className="text-xs text-[#f8a11d]">RON </span>
                      {data.product_price}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
