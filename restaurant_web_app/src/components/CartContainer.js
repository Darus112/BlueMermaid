import { motion } from "framer-motion";
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus  } from "react-icons/ai"

export default function CartContainer() {
    return (
    <>
        <div 
            className="w-full md:w-[750px] h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            flex flex-col  rounded-[2rem] bg-gradient-to-b from-seagull-300 to-seagull-100
            items-center ml-4">
            <div className="w-full flex items-center justify-between p-4">
                <p className="font-content text-2xl ">Cart</p>
                <motion.p 
                    whileTap={{scale : 0.75}}
                    className="font-content text-2xl flex items-center gap-2 p-1
                    px-2 my-2 bg-seagull-100 rounded-md hover:shadow-md cursor-pointer
                    text-seagull-900">
                    Clear <AiOutlineClear />{" "}
                </motion.p>
            </div>

            {/* bottom section */}
            <div className="w-[650px] h-[1230px] md:w-[780px] bg-gradient-to-b from-seagull-100 to-seagull-300 rounded-t-[2rem]
            rounded-b-[2rem] flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center">
                {/* cart item section*/}
                <div className="w-full h-[815px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                    {/* cart item*/}
                    <div 
                        className="w-full py-4 px-4 rounded-[2rem] bg-seagull-200
                        flex items-center gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/restaurant-website-60f84.appspot.com/o/Images%2F1679080248359-food-6.png?alt=media&token=d0924309-8ac1-4d47-b1b9-469f45964104"
                            alt=""
                            className="w-28  rounded-3xl object-contain shadow-md"
                        />

                        {/* name section */}
                        <div className="flex flex-col gap-2">
                            <p className="text-seagull-900 font-body font-light text-lg">Mancare de test</p>
                            <p className="text-seagull-900 font-body font-normal text-sm text-left">$7.5</p>
                        </div>

                        {/* button section */}
                        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                            <motion.div whileTap={{scale : 0.75}}>
                                <AiOutlineMinus className="text-seagull-900"/>
                            </motion.div>
                            <p className="w-5 h-5 rounded-full bg-seagull-900 text-seagull-50 flex 
                            items-center justify-center shadow-lg">1</p>
                            <motion.div whileTap={{scale : 0.75}}>
                                <AiOutlinePlus className="text-seagull-900"/>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* cart total section*/}
                <div 
                    className="w-[670px] flex-1 md:w-[810px] bg-gradient-to-b from-seagull-100 to-seagull-300 rounded-t-[2rem]
                    rounded-b-[2rem] flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-12 items-center justify-center">
                    <div className="w-full flex items-center justify-between py-2">
                        <p className="font-body text-lg text-seagull-900">Sub total</p>
                        <p className="font-body text-lg text-seagull-900">$8.5</p>
                    </div> 
                    <div className="w-full flex items-center justify-between py-2">
                        <p className="font-body text-lg text-seagull-900">Delivery</p>
                        <p className="font-body text-lg text-seagull-900">$2.5</p>
                    </div> 

                    <div className="w-full border-b border-seagull-900 my-2 py-2"></div>

                    <div className="w-full flex items-center justify-between py-2">
                        <p className="text-seagull-900 text-lg font-body font-semibold">Total</p>
                        <p className="text-seagull-900 text-lg font-body font-semibold">$11</p>
                    </div>

                    <motion.button
                        whileTap={{scale : 0.8}}
                        type="button"
                        className="w-1/4 rounded-full bg-gradient-to-tr from-[#ccc8e6] to-[#6d5be3] text-seagull-900 text-lg my-2
                        hover:shadow-lg font-body py-8"
                        >
                            Go to delivery
                    </motion.button>
            </div>
            </div>
        </div>
    </>
    );
}