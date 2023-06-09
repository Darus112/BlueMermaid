import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

import AbouImg1 from "../assets/Img/about_img2.jpg";
import AbouImg2 from "../assets/Img/about_img1.jpg";

export default function About() {
  return (
    <div className="min-h-screen w-screen bg-generalBg bg-fixed bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col mt-40 px-20">
        <div className="w-full flex items-center justify-evenly flex-col md:flex-row gap-10 my-10">
          <Fade left>
            <img
              src={AbouImg1}
              alt=""
              className="w-508 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
            />
          </Fade>
          <Fade right>
            <div
              className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5
            backdrop-blur-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-2xl"
            >
              <h1
                className="text-seagull-900 text-[40px]
    font-extrabold tracking-wider "
              >
                Despre Noi
              </h1>
              <p className=" text-seagull-900 text-[25px]">
                Bun venit la restaurantul nostru! Suntem un paradis culinar
                dedicat creării unor experiențe gastronomice de neuitat. Cu o
                pasiune pentru mâncare excepțională și o ospitalitate caldă, te
                invităm să începi o călătorie plină de arome alături de noi
              </p>
            </div>
          </Fade>
        </div>
        <div className="w-full flex items-center justify-center my-20">
          <Fade>
            <div
              className="md:w-[700px] flex items-center justify-center flex-col font-content gap-5
            backdrop-blur-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-2xl"
            >
              <h1
                className="text-seagull-900 text-[45px]
    font-extrabold tracking-wider "
              >
                Echipa Noastră
              </h1>
              <p className=" text-seagull-900 text-[30px]">
                Echipa noastră este inima și sufletul restaurantului nostru. Cu
                un angajament comun pentru excelență și o pasiune autentică
                pentru ospitalitate, echipa noastră depune eforturi
                extraordinare pentru a asigura că experiența ta culinară este cu
                adevărat excepțională.
              </p>
            </div>
          </Fade>
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
    </div>
  );
}
