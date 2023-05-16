import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import AbouImg1 from "../assets/Img/about_img2.jpg";
import AbouImg2 from "../assets/Img/about_img1.jpg";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-evenly flex-col md:flex-row gap-10 my-10">
        <Fade left>
          <img
            src={AbouImg1}
            alt=""
            className="w-508 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
          />
        </Fade>
        <Fade right>
          <div className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5">
            <h1
              className="text-seagull-900 text-[40px]
    font-extrabold tracking-wider "
            >
              About Us
            </h1>
            <p className=" text-seagull-900 text-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Fade>
      </div>
      <div className="w-full flex items-center justify-center my-20">
        <Bounce>
          <div className="md:w-[700px] flex items-center justify-center flex-col font-content gap-5">
            <h1
              className="text-seagull-900 text-[45px]
    font-extrabold tracking-wider "
            >
              Our Staff
            </h1>
            <p className=" text-seagull-900 text-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Bounce>
      </div>
      <Fade bottom>
        <div className="w-full flex items-center justify-center mb-20">
          <img
            src={AbouImg2}
            alt=""
            className="w-[1300px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
          />
        </div>
      </Fade>
    </div>
  );
}
