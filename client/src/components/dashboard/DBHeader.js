import React from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { BiSearchAlt } from "react-icons/bi";
import { BsToggles2 } from "react-icons/bs";
import { TbBellFilled } from "react-icons/tb";
import { buttonClick } from "../../animation";
import { FiLogOut } from "react-icons/fi";

import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { setUserNull } from "../../context/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

export default function DBHeader() {
  const user = useSelector((state) => state.user);

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-ful flex items-center justify-between gap-3">
      <p
        className="font-content font-bold text-xl flex flex-col 
      justify-start text-seagull-900"
      >
        Welcome to our restaurant
        {user?.name && (
          <span className="text-sm font-semibold text-seagull-600">{`Hello ${user?.name}!`}</span>
        )}
      </p>

      <div className="flex items-center justify-center gap-4">
        <div
          className="flex items-center justify-center gap-3 px-4 py-2 rounded-md shadow-lg
        bg-gradient-to-r from-[#ffffff] to-[#d2f2f7]"
        >
          <BiSearchAlt className="text-[#bbb9b9] text-xl" />
          <input
            className="font-body text-sm bg-transparent border-none outline-none"
            type="text"
            placeholder="Search here..."
          />
          <BsToggles2 className="text-[#bbb9b9] text-xl" />
        </div>

        <motion.div
          {...buttonClick}
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-md cursor-pointer  bg-gradient-to-r from-[#ffffff] to-[#d2f2f7]
        shadow-lg flex items-center justify-center border-none outline-none"
        >
          <TbBellFilled className="text-[#bbb9b9] text-xl" />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} className=" cursor-pointer">
          <img
            src={user?.picture}
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-md
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          {...buttonClick}
          onClick={signOut}
          whileHover={{ scale: 1.1 }}
          className="group flex items-center justify-center px-3 py-2 rounded-lg 
                shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none border-none h-10
                bg-gradient-to-r from-[#ffffff] to-[#d2f2f7] gap-3 cursor-pointer"
        >
          <FiLogOut className="text-xl text-seagull-900 " />
        </motion.div>
      </div>
    </div>
  );
}
