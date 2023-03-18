import { motion } from "framer-motion";
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus  } from "react-icons/ai"
import { useStateValue } from "../context/StateProvider";
import EmptyCart from "../assets/empty_cart.png";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { actionType } from "../context/reducer";

export default function CartContainer() {

    const [{cartItems}, dispatch] = useStateValue();
    const [flag, setFlag] = useState(1);
    const [tot, setTot] = useState(0);

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, item) {
            return accumulator + item.qty * item.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
    }, [tot, flag]);

    const clearCart = () => {
        dispatch({
            type : actionType.SET_CARTITEMS,
            cartItems: [],
        });

        localStorage.setItem("cartItems", JSON.stringify([]));
    };


    return (
    <>
        <div 
            className="w-full md:w-[750px] h-[1260px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]
            flex flex-col  rounded-[2rem] bg-gradient-to-b from-seagull-300 to-seagull-100
            items-center ml-4">
            <div className="w-full flex items-center justify-between p-4">
                <p className="font-content text-2xl ">Cart</p>
                <motion.p 
                    whileTap={{scale : 0.75}}
                    className="font-content text-2xl flex items-center gap-2 p-1
                    px-2 my-2 bg-seagull-100 rounded-md hover:shadow-md cursor-pointer
                    text-seagull-900"
                    onClick={clearCart}>
                    Clear <AiOutlineClear />{" "}
                </motion.p>
            </div>

            {/* bottom section */}
            {cartItems && cartItems.length > 0 ? (
                <div className="w-[650px] h-[1260px] md:w-[780px] bg-gradient-to-b from-seagull-100 to-seagull-300 rounded-t-[2rem]
                rounded-b-[2rem] flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center">
                    {/* cart item section*/}
                    <div className="w-full h-[815px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                        {/* cart item*/}
                        {
                            cartItems && 
                            cartItems.length > 0 &&
                            cartItems.map((item) => (
                                <CartItem 
                                    key={item.id}
                                    item={item}
                                    setFlag={setFlag}
                                    flag={flag}/>
                            ))}
                    </div>
    
                    {/* cart total section*/}
                    <div 
                        className="w-[670px] flex-1 md:w-[810px] bg-gradient-to-b from-seagull-100 to-seagull-300 rounded-t-[2rem]
                        rounded-b-[2rem] flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-12 items-center justify-center">
                        <div className="w-full flex items-center justify-between py-2">
                            <p className="font-body text-lg text-seagull-900">Sub total</p>
                            <p className="font-body text-lg text-seagull-900">${tot}</p>
                        </div> 
                        <div className="w-full flex items-center justify-between py-2">
                            <p className="font-body text-lg text-seagull-900">Delivery</p>
                            <p className="font-body text-lg text-seagull-900">$2.5</p>
                        </div> 
    
                        <div className="w-full border-b border-seagull-900 my-2 py-2"></div>
    
                        <div className="w-full flex items-center justify-between py-2">
                            <p className="text-seagull-900 text-lg font-body font-semibold">Total</p>
                            <p className="text-seagull-900 text-lg font-body font-semibold">${tot + 2.5}</p>
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
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <img src={EmptyCart} className="w-96" alt="" />
                    <p className="text-xl text-seagull-900 font-semibold font-body">
                    Add some items to your cart
                    </p>
                </div>
            )}
        </div>
    </>
    );
}