import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


import RowContainer from "../components/RowContainer";
import MenuContainer from "../components/MenuContainer";
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
              before:absolute before:content before:w-16 before:h-1
              before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-seagull-300 
              to-[#8DEBFF] transition-all ease-in-out duration-100">
              Our Specials
            </p>


          </div>

          <RowContainer 
            scrollValue={scrollValue}
            flag={true} 
            data ={foodItems?.filter(n => n.category === "specials")}
          />
        </section>
        </Fade>

        <MenuContainer />
      </div>
      </>
    )
  }