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
              Welcome to our restaurant! We are a culinary haven dedicated to
              creating unforgettable dining experiences. With a passion for
              exceptional food and warm hospitality, we invite you to embark on
              a flavorful journey with us.
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
              Our staff is the heart and soul of our restaurant. With a shared
              commitment to excellence and a genuine passion for hospitality,
              our team goes above and beyond to ensure your dining experience is
              nothing short of exceptional.
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
