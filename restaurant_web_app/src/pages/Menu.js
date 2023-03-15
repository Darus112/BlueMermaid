import "./styles/Menu.css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import RowContainer from "../components/RowContainer";
import { useStateValue } from "../context/StateProvider";

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function Menu() {

    const [{foodItems}, dispatch] = useStateValue();

    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {}, [scrollValue]);

    return(
      <>
      <div className="mt-20 ">
        <Bounce>
        <h2 className="font-content text-4xl font-black text-left">Explore our menu</h2>
        </Bounce>
        <Fade left>
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
                flex items-center justify-center"
                onClick={() => setScrollValue(-200)}
              >
                <MdChevronLeft className="text-xl text-white"/>
              </motion.div>
              <motion.div 
                whileTap={{scale : 0.75}}
                className="w-8 h-8 rounded-lg bg-[#8DEBFF] hover:bg-seagull-300 
                cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg
                flex items-center justify-center"
                onClick={() => setScrollValue(200)}
                >
                <MdChevronRight className="text-xl text-white"/>
              </motion.div>
            </div>
          </div>

          <RowContainer 
            scrollValue={scrollValue}
            flag={true} 
            data ={foodItems?.filter(n => n.category === "specials")}
          />
        </section>
        </Fade>
      </div>
      </>
    )
  }