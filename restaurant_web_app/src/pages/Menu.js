import "./styles/Menu.css";
import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import RowContainer from "../components/RowContainer";


export default function Menu() {
    return(
      <>
      <div className="mt-20 ">
        <h2 className="font-content text-4xl font-black text-left">Explore our menu</h2>
        <section className="w-full mt-12">
          <div className="w-full flex items-center justify-between ">
            <p 
              className="font-content text-2xl font-extrabold text-left relative
              before:absolute before:content before:w-32 before:h-1
              before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-seagull-300 
              to-[#8DEBFF] transition-all ease-in-out duration-100">
              Our Specials
            </p>

            <div className=" hidden md:flex gap-3 items-center mr-12">
              <motion.div 
                whileTap={{scale : 0.75}}
                className="w-8 h-8 rounded-lg bg-[#8DEBFF] hover:bg-seagull-300 
                cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg
                flex items-center justify-center">
                <MdChevronLeft className="text-xl text-white"/>
              </motion.div>
              <motion.div 
                whileTap={{scale : 0.75}}
                className="w-8 h-8 rounded-lg bg-[#8DEBFF] hover:bg-seagull-300 
                cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg
                flex items-center justify-center">
                <MdChevronRight className="text-xl text-white"/>
              </motion.div>
            </div>
          </div>

          <RowContainer flag={true} />
        </section>
      </div>
      </>
    )
  }