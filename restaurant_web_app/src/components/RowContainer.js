import React, { useEffect, useRef } from 'react'

import { BsBasket3Fill } from "react-icons/bs"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { motion } from "framer-motion";

export default function RowContainer({flag, data}) {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
      <div className=" hidden md:flex gap-3 items-center mr-12 justify-end">
        <motion.div 
          whileTap={{scale : 0.75}}
          className="w-8 h-8 rounded-lg bg-[#8DEBFF] hover:bg-seagull-300 
          cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg
          flex items-center justify-center"
          onClick={slideLeft}
        >
          <MdChevronLeft className="text-xl text-white"/>
        </motion.div>
        <motion.div 
          whileTap={{scale : 0.75}}
          className="w-8 h-8 rounded-lg bg-[#8DEBFF] hover:bg-seagull-300 
          cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg
          flex items-center justify-center"
          onClick={slideRight}
        >
          <MdChevronRight className="text-xl text-white"/>
        </motion.div>
      </div>
    <div 
      id='slider'
      className={`w-full my-12 flex items-center gap-8 px-4 scroll-smooth
      bg-gradient-to-l from-transparent via-seagull-300 to-transparent ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-hidden flex-wrap'
    }`}>
      {data && data.map(item => (
                <div 
                key={item?.id}
                className="h-[250px]  w-72 min-w-[288px] md:w-96 md:min-w-[384px] my-12 bg-seagull-100 
                shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg rounded-lg p-3
                hover:bg-seagull-200 flex flex-col items-center justify-between">
                    <div className='w-full flex items-center justify-between'>
                        <motion.img 
                          whileHover={{scale : 1.1}}
                          src={item?.imageURL}
                          alt='food' 
                          className='w-44 -mt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg'/>
                        <motion.div 
                          whileTap={{scale : 0.75}}
                          className='w-8 h-8 rounded-full bg-gradient-to-tr from-seagull-300 to-[#67e8f9]
                          hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center justify-center 
                          cursor-pointer '>
                            <BsBasket3Fill className='text-white'/>
                        </motion.div>
                    </div>
    
                    <div className='w-full flex flex-col gap-1 items-end justify-end'>
                      <p className='text-bold font-food text-base md:text-xl'>
                        {item?.title}
                      </p>
                      <motion.p
                        whileHover={{scale : 1.1}} 
                        className='font-food mt-1 text-[#a9b1b3] font-bold text-sm
                        cursor-pointer'>
                          Ingredients
                      </motion.p>
                      <div className='flex items-center gap-8'>
                        <p className='text-lg font-food text-price font-bold'>
                          <span className='text-seagull-400'>$</span>{item?.price}
                        </p>
                      </div>
                    </div>
                </div>
      ))}
    </div>
    </>
  );
};

