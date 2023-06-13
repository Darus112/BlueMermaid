import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import OurSpecialBg from "../assets/Img/Hero_bg.png";
import HomeImg from "../assets/Img/home_img.png";

import { AiFillThunderbolt } from "react-icons/ai";
import { MdRoomService } from "react-icons/md";
import { GiChefToque } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { buttonClick } from "../animation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DetailsCard from "../components/DetailsCard";

export default function Home() {
  const products = useSelector((state) => state.products);
  const [specials, setSpecials] = useState(null);

  useEffect(() => {
    setSpecials(
      products?.filter((data) => data.product_category === "ourspecial")
    );
    console.log(specials);
  }, [products]);

  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-evenly flex-col md:flex-row gap-5 my-10">
        <Fade left>
          <div className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5">
            <h1
              className="text-[25px] text-seagull-900 md:text-[40px]
          font-extrabold tracking-wider md:w-96"
            >
              Deliciousness jumping into the mouth
            </h1>
            <p className="text-seagull-900 text-[20px]">
              Is a tantalizing culinary experience that will leave your taste
              buds craving for more. This sensory adventure takes you on a
              journey through a symphony of flavors, where every bite is a
              delightful explosion of taste. From delectable appetizers to
              mouthwatering main courses and divine desserts, each dish is
              crafted with precision and passion, ensuring that every morsel is
              a moment of pure bliss.
            </p>
          </div>
        </Fade>
        <Fade right>
          <img
            src={HomeImg}
            alt=""
            className=" w-508 bg-gradient-to-tr from-seagull-200 to-[#38bcce] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 "
          />
        </Fade>
      </div>
      <Bounce>
        <div className="w-full flex items-center justify-center my-32">
          <DetailsCard />
        </div>
      </Bounce>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-32">
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

            <p className="text-lg font-content">
              Our restaurant offers an unparalleled level of convenience and
              satisfaction right at your doorstep. We pride ourselves on
              delivering exceptional service that goes above and beyond,
              ensuring that every customer receives a seamless and memorable
              experience. Our dedicated team of professionals is committed to
              providing prompt and friendly assistance, catering to your needs
              with utmost care and attention to detail.
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
          <div className="py-2 flex-1 flex items-center justify-center md:justify-end relative md:mt-0 mt-20">
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
      <div className="w-full flex items-center justify-evenly flex-col md:flex-row gap-5">
        <Fade left>
          <div className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5">
            <h1
              className="text-[25px] text-seagull-900 md:text-[40px]
          font-extrabold tracking-wider md:w-96"
            >
              Why Choose Our Food
            </h1>
            <p className=" text-seagull-900 text-[20px]">
              Discover the enticing flavors and exceptional quality of our food.
              With a team of talented chefs, authentic ingredients, and a
              commitment to customer satisfaction, choosing our food guarantees
              a memorable culinary experience. From diverse menu options to
              impeccable presentation, let your taste buds indulge in a journey
              of delectable delights.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="grid grid-cols-2 gap-12 items-center justify-center my-28">
            <div
              className="w-44 h-44 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
            >
              <div className="flex flex-col items-center justify-center gap-y-3">
                <IoIosRestaurant className="text-white text-6xl drop-shadow-lg" />
                <p className="font-body text-seagull-700 text-lg drop-shadow-lg font-medium">
                  Quality food
                </p>
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
            >
              <div className="flex flex-col items-center justify-center gap-y-3">
                <MdOutlineRoomService className="text-white text-6xl drop-shadow-lg" />
                <p className="font-body text-seagull-700 text-lg drop-shadow-lg font-medium">
                  Classical taste
                </p>
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
            >
              <div className="flex flex-col items-center justify-center gap-y-3">
                <GiChefToque className="text-white text-6xl drop-shadow-lg" />
                <p className="font-body text-seagull-700 text-lg drop-shadow-lg font-medium">
                  Skilled chef
                </p>
              </div>
            </div>
            <div
              className="w-44 h-44 flex items-center justify-center rounded-3xl 
        bg-gradient-to-tr from-seagull-300 to-[#6fdfee] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-6 lg:mb-0"
            >
              <div className="flex flex-col items-center justify-center gap-y-3">
                <RiHandCoinFill className="text-white text-6xl drop-shadow-lg" />
                <p className="font-body text-seagull-700 text-lg drop-shadow-lg font-medium">
                  Best service
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
