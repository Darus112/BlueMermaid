import React from "react";

import Navbar from "./Navbar";
import CheckoutSucces from "../assets/Img/checkout-succes.png";

import { FaArrowLeft } from "react-icons/fa";

import { motion } from "framer-motion";
import { buttonClick } from "../animation";

import { NavLink } from "react-router-dom";

export default function CheckOutSuccess() {
  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col">
      <div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
        <img
          src={CheckoutSucces}
          className=" w-375 md:w-460 drop-shadow-lg"
          alt=""
        />
        <h1 className="text-[40px] text-seagull-900 font-body font-bold drop-shadow-lg">
          Amount paid Successfully
        </h1>

        <motion.div {...buttonClick}>
          <NavLink
            to={"/"}
            className="flex items-center justify-center gap-4 cursor-pointer text-xl text-seagull-800 font-semibold font-body px-4 py-2 rounded-lg border border-seagull-200 
            shadow-md hover:shadow-seagull-300"
          >
            <FaArrowLeft className="text-2xl text-seagull-900" />
            Get back to Home
          </NavLink>
        </motion.div>
      </div>
    </main>
  );
}
