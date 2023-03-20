import React, { useEffect, useState } from 'react';
import { MdDinnerDining } from "react-icons/md"
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import FoodContainer from './FoodContainer';
import { useStateValue } from '../context/StateProvider';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


export default function MenuContainer() {

    const [filter, setfilter] = useState("breakfast");

    const [{foodItems}, dispatch] = useStateValue();
    
    return (
    <>
        <section className="w-full mt-12 flex" id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <Fade left>
                <p 
                    className="font-content text-2xl font-extrabold text-left relative
                    before:absolute before:content before:w-16 before:h-1
                    before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-seagull-300 
                    to-[#8DEBFF] transition-all ease-in-out duration-100 mr-auto">
                    Our Hot Dishes
                </p>
                </Fade>
                <Bounce>
                <div 
                    className='w-full flex items-center justify-center
                    gap-8 py-6 overflow-x-scroll scrollbar-none'>
                    {categories && categories.map(category => (
                        <motion.div 
                            whileTap={{scale : 0.6}}
                            key={category.id}
                            className={`group ${
                                filter === category.urlParamName ? 'bg-seagull-300' : 'bg-seagull-200'
                            }
                             w-24 min-w-[94px] h-28 cursor-pointer 
                            rounded-lg flex flex-col gap-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
                            items-center justify-center hover:bg-seagull-300`}
                            onClick={() => setfilter(category.urlParamName)}>
                            <div 
                                className={`w-10 h-10 rounded-full ${
                                    filter === category.urlParamName ? 'bg-seagull-200' : 'bg-seagull-300'
                                }
                                group-hover:bg-seagull-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                                flex items-center justify-center`}>
                                <MdDinnerDining className={`${
                                    filter === category.urlParamName ? 'text-seagull-900' : 'text-seagull-100'
                                    } group-hover:text-seagull-900 text-2xl`}/>
                            </div>
                            <p 
                                className={`font-body text-sm ${
                                filter === category.urlParamName ? 'text-seagull-100' : 'text-seagull-900'
                                } group-hover:text-seagull-100`}>
                                {category.name}
                            </p> 
                        </motion.div>
                    ))}
                </div>
                </Bounce>
                <Fade bottom>
                <div className='w-full'>
                    <FoodContainer 
                    flag={false}
                    data={foodItems?.filter(n => n.category == filter)}
                     />
                </div>
                </Fade>
            </div>
        </section>
    </>
  )
}
