import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { buttonClick } from "../animation";

import Fade from "react-reveal/Fade";

import UserImg from "../assets/Img/userImg.png";

import bgProfile from "../assets/Img/profile_bg.jpg";
import Navbar from "../components/Navbar";

export default function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      <Navbar />
      <Fade>
        <img src={bgProfile} className="w-full h-full object-cover" alt="bg" />
      </Fade>
      <Fade left>
        <div className="h-full w-full md:w-[600px] backdrop-blur-lg absolute left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10">
            <img
              src={user?.picture ? user?.picture : UserImg}
              className="w-16 h-16 object-contain rounded-full shadow-lg"
            />
            <p className=" font-body font-semibold text-xl drop-shadow-xl">
              {user.name}
            </p>
            <p className=" font-body text-xl drop-shadow-xl">{user.email}</p>
            <p className=" font-content text-seagull-300 mt-16">
              Thanks for your login!
            </p>
          </div>
          <Link to="/user-orders">
            <motion.p
              {...buttonClick}
              whileHover={{ scale: 1.1 }}
              className="font-body font-light bottom-5 
              right-7 absolute underline"
            >
              watch your orders
            </motion.p>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
