import { React, useState, useEffect } from "react";

import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
let items = [];

export default function CartItem({ item, setFlag, flag }) {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          setFlag(flag + 1);
        }
      });
      cartDispatch();
    } else {
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id);
        setFlag(flag + 1);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
            setFlag(flag + 1);
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <div
      className="w-full py-4 px-4 rounded-[2rem] bg-seagull-200
        flex items-center gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <img
        src={item?.imageURL}
        alt=""
        className="w-28  rounded-3xl object-contain shadow-md"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-seagull-900 font-body font-light text-lg">
          {item?.title}
        </p>
        <p className="text-seagull-900 font-body font-normal text-sm text-left">
          ${parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <AiOutlineMinus className="text-seagull-900" />
        </motion.div>
        <p
          className="w-5 h-5 rounded-full bg-seagull-900 text-seagull-50 flex 
            items-center justify-center shadow-lg"
        >
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <AiOutlinePlus className="text-seagull-900" />
        </motion.div>
      </div>
    </div>
  );
}
