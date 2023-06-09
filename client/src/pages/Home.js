import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import OurSpecialBg from "../assets/Img/Hero_bg.png";
import HomeImg from "../assets/Img/home_img.png";
import HeaderImg from "../assets/Img/Background/2.png";

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
      products?.filter((data) => data.product_category === "specialitate")
    );
    console.log(specials);
  }, [products]);

  return (
    <div className="flex flex-col">
      <Fade>
        <div
          className=" min-h-screen w-screen flex justify-center items-center 
      bg-headerImg1 bg-fixed bg-no-repeat bg-cover bg-center"
        >
          <Bounce>
            <h1 className="font-black font-body text-seagull-900 text-6xl w-[400px] text-center">
              Bun venit la restaurantul nostru!
            </h1>
          </Bounce>
        </div>
      </Fade>

      <div
        className="w-full min-h-screen flex items-center justify-evenly flex-col md:flex-row gap-5 mb-10
      bg-headerImg2 bg-fixed bg-no-repeat bg-cover bg-center"
      >
        <Fade left>
          <div
            className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5
           backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-2xl"
          >
            <h1
              className="text-[25px] text-seagull-900 md:text-[40px]
          font-extrabold tracking-wider md:w-96"
            >
              Deliciul care te îmbie la fiecare mușcătură
            </h1>
            <p className="text-seagull-900 text-[20px]">
              Este o experiență culinară tantalizantă care îți va face papilele
              gustative să ceară mai mult. Această aventură senzorială te poartă
              într-o călătorie printr-o simfonie de arome, unde fiecare
              înghițitură este o explozie delicioasă de gust. De la aperitive
              delicioase la feluri principale care îți lasă gura apă și
              deserturi divine, fiecare fel este creat cu precizie și pasiune,
              asigurându-se că fiecare bucățică este un moment de fericire pură.
            </p>
          </div>
        </Fade>
        <Fade right>
          <img
            src={HomeImg}
            alt=""
            className=" w-656 bg-gradient-to-tr from-seagull-200 to-[#38bcce] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 "
          />
        </Fade>
      </div>

      <Fade>
        <div className="w-full flex items-center justify-center my-48 ">
          <DetailsCard />
        </div>
      </Fade>

      <div className="min-h-screen bg-headerImg3 bg-fixed bg-no-repeat bg-cover bg-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-96 px-40">
          <Fade left>
            <div
              className="flex flex-col items-center md:items-start justify-center gap-6 md:mr-32
             backdrop-blur-lg bg-seagull-100 bg-opacity-70 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-2xl"
            >
              <div className="px-4 py-1 flex items-center justify-center gap-2 bg-seagull-200 rounded-full">
                <div className="bg-seagull-50 w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                  <MdRoomService className="text-seagull-400" />
                </div>
                <p className="font-body text-seagull-400 text-xs font-semibold">
                  Cea mai bună servire și livrare rapidă
                </p>
                <div className="bg-seagull-50 w-7 h-7 flex items-center justify-center rounded-full shadow-lg">
                  <AiFillThunderbolt className="text-seagull-400" />
                </div>
              </div>

              <p
                className="text-[25px] text-seagull-900 md:text-[40px] font-content
          font-extrabold tracking-wider"
              >
                Cel mai bun serviciu și livrare din{" "}
                <span className="text-seagull-300">Orașul Tău</span>
              </p>

              <p className="text-lg font-content">
                Restaurantul nostru oferă un nivel de confort și satisfacție
                fără egal, chiar la ușa ta. Ne mândrim cu furnizarea unui
                serviciu excepțional, care depășește așteptările, asigurându-ne
                că fiecare client primește o experiență fluidă și memorabilă.
                Echipa noastră dedicată de profesioniști este angajată să ofere
                asistență promptă și prietenoasă, satisfăcând nevoile tale cu
                cea mai mare grijă și atenție la detalii.
              </p>
              <Link to={"/menu"}>
                <motion.button
                  {...buttonClick}
                  whileHover={{ scale: 1.02 }}
                  className=" bg-gradient-to-tr from-seagull-300 to-[#94e2fa]
            px-4 py-2 rounded-xl font-body text-white font-semibold"
                >
                  Explorează meniul
                </motion.button>
              </Link>
            </div>
          </Fade>
          <Fade right>
            <div className="py-2 flex-1 flex items-center justify-center md:justify-end relative md:mt-0 mt-20">
              <img
                src={OurSpecialBg}
                alt=""
                className="w-auto h-650 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]  md:top-0 md:absolute"
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

      <div
        className="w-full flex items-center justify-evenly flex-col md:flex-row gap-5
      min-h-screen bg-headerImg4 bg-fixed bg-no-repeat bg-cover bg-center"
      >
        <Fade left>
          <div
            className="w-[500px] flex items-center justify-center md:items-start md:justify-start flex-col font-content gap-5
           backdrop-blur-lg bg-seagull-100 bg-opacity-70 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-2xl"
          >
            <h1
              className="text-[25px] text-seagull-900 md:text-[40px]
          font-extrabold tracking-wider md:w-96"
            >
              De ce să alegi Mâncarea Noastră
            </h1>
            <p className=" text-seagull-900 text-[20px]">
              Descoperă aromele atrăgătoare și calitatea excepțională a mâncării
              noastre. Cu o echipă de bucătari talentați, ingrediente autentice
              și angajamentul față de satisfacția clienților, alegerea mâncării
              noastre garantează o experiență culinară memorabilă. De la diverse
              opțiuni de meniu până la o prezentare impecabilă, lasă-ți papilele
              gustative să se bucure de o călătorie plină de delicii
              delectabile.
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
                  Foarte gustos
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
                  Gust clasic
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
                  Bucătar priceput
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
                  Serviciu excelent
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
