import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { buttonClick, slideIn, slideOut, staggerFadeInOut } from "../animation";

import { HiChevronDoubleRight } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { setCartOff } from "../context/actions/displayCartAction";

import EmptyCart from "../assets/Img/empty_cart.png";

import {
  baseURL,
  deleteCartItems,
  getAllCartItems,
  increaseItemQuantity,
} from "../api";
import { clearCartItems, setCartItems } from "../context/actions/cartActions";
import { MdShoppingCartCheckout } from "react-icons/md";
import axios from "axios";
import {
  alertInfo,
  alertNULL,
  alertSucces,
} from "../context/actions/alertActions";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    if (cart) {
      cart.map((data) => {
        tot = tot + data.product_price * data.quantity;
        setTotal(tot);
      });
    }
  }, [cart]);

  const handleCheckOut = () => {
    const data = {
      user: user,
      cart: cart,
      total: total,
    };
    if (!user) {
      dispatch(alertInfo("Please login to Checkout!"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    } else {
      axios
        .post(`${baseURL}/api/products/create-checkout-session`, { data })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <motion.div
      {...slideIn}
      className="fixed z-50 top-0 right-0 w-508 md:w-460 bg-seagull-300 backdrop-blur-lg h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-opacity-40"
    >
      <div className="w-full flex items-center justify-between py-4 pb-12 px-3">
        <motion.i
          {...buttonClick}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer border-none outline-none shadow-lg rounded-full p-2 hover:shadow-seagull-300"
          onClick={() => dispatch(setCartOff())}
        >
          <HiChevronDoubleRight className="text-[30px] text-seagull-900 drop-shadow-lg" />
        </motion.i>
        <p className="font-body text-seagull-900 font-medium">Your Cart</p>
        <motion.i
          {...buttonClick}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer border-none outline-none shadow-lg rounded-full p-2 hover:shadow-seagull-300"
        >
          <AiOutlineClear className="text-[30px] text-seagull-900 drop-shadow-lg" />
        </motion.i>
      </div>

      <div className="flex-1 flex flex-col items-start justify-start rounded-t-3xl bg-seagull-900 h-full py-6 gap-3 relative bg-opacity-60 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {cart && cart?.length > 0 ? (
          <>
            <div className="flex flex-col w-full items-start justify-start gap-3 h-[65%] overflow-y-scroll scrollbar-none px-4">
              {cart &&
                cart?.length > 0 &&
                cart?.map((item, i) => <CartItemCard key={i} data={item} />)}
            </div>
            <div
              className="bg-seagull-900 rounded-t-[60px] w-full h-[35%]
      flex flex-col items-center  px-4 py-12 gap-2 bg-opacity-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="w-full flex items-center justify-evenly ">
                <p className="text-base text-seagull-900 font-body font-bold">
                  Total
                </p>
                <p className="text-base text-seagull-200 font-food font-medium">
                  <span className="font-food text-sm font-bold text-[#e7d77c] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    RON{" "}
                  </span>{" "}
                  {parseFloat(total).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between gap-10">
                <div
                  className="w-[150px] h-[3px] rounded-xl
        bg-gradient-to-r from-seagull-900 to-seagull-600"
                ></div>
                <MdShoppingCartCheckout className=" text-lg text-seagull-400" />
                <div
                  className="w-[150px] h-[3px] rounded-xl
        bg-gradient-to-l from-seagull-900 to-seagull-600"
                ></div>
              </div>
              <motion.button
                {...buttonClick}
                whileHover={{ scale: 1.02 }}
                className=" bg-gradient-to-tr from-[#8400ff] to-[#e9d4f8]
              w-[30%] px-2 py-3 text-sm text-[#e2cdfd] shadow-md font-extrabold
               hover:shadow-[#8400ff] rounded-xl border-none outline-none mt-5
                font-body"
                onClick={handleCheckOut}
              >
                Check Out
              </motion.button>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center mb-32">
            <img src={EmptyCart} className="w-96 drop-shadow-lg" />
            <p className="font-body text-lg font-light drop-shadow-lg">
              Your Cart is Currently Empty!
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export const CartItemCard = ({ index, data }) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [itemTotal, setItemTotal] = useState(0);

  const decrementCart = (productId) => {
    increaseItemQuantity(user?.user_id, productId, "decrement").then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
    });
  };

  const incrementCart = (productId) => {
    increaseItemQuantity(user?.user_id, productId, "increment").then((data) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
    });
  };

  useEffect(() => {
    setItemTotal(data.product_price * data.quantity);
  }, [itemTotal, cart]);

  return (
    <motion.div
      key={index}
      {...staggerFadeInOut(index)}
      className="w-full flex items-center justify-start bg-seagull-900 rounded-xl drop-shadow-md px-4 py-4 gap-4 bg-opacity-75"
    >
      <img
        src={data?.imageURL}
        className="w-24 min-w-[90px] object-contain rounded-lg shadow-xl border-[2px] border-seagull-600"
        alt=""
      />

      <div className="flex items-center justify-start gap-1 w-full">
        <p className=" text-xs font-body text-seagull-100">
          {data?.product_name}
          <span className="text-[10px] block font-body text-seagull-200 capitalize">
            {data?.product_category}
          </span>
        </p>
        <p className=" text-sm flex items-center justify-center gap-1 font-medium  font-food ml-auto text-seagull-300">
          <div className="rounded-full w-6 flex items-center justify-center h-6 bg-seagull-100 shadow-md">
            <span className=" text-[8px] font-body font-medium text-[#ebdd64] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              RON{" "}
            </span>
          </div>
          {parseFloat(itemTotal).toFixed(2)}
        </p>
      </div>

      <div className="ml-auto flex items-center justify-center gap-3 border-l-2 h-full pl-2 border-seagull-900">
        <motion.div
          {...buttonClick}
          onClick={() => decrementCart(data?.productId)}
          className="w-5 h-5 flex items-center justify-center rounded-full shadow-lg cursor-pointer border-none outline-none"
        >
          <AiOutlineMinus className="text-xs" />
        </motion.div>
        <p className="text-sm font-body">{data?.quantity}</p>
        <motion.div
          {...buttonClick}
          onClick={() => incrementCart(data?.productId)}
          className="w-5 h-5 flex items-center justify-center rounded-full shadow-lg cursor-pointer border-none outline-none"
        >
          <AiOutlinePlus className="text-xs" />
        </motion.div>
      </div>
    </motion.div>
  );
};
