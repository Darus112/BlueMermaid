import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import LogoImg from "../../assets/Img/logo.png";

import { HiBarsArrowDown } from "react-icons/hi2";
import { buttonClick } from "../../animation";
import { FiLogOut } from "react-icons/fi";

import { getAuth } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { setUserNull } from "../../context/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { isActiveStyles2, isNotActiveStyles2 } from "../../utils/styles";

export default function DBHeader() {
  const user = useSelector((state) => state.user);

  const [showNav, setShowNav] = useState(false);

  const menu = () => setShowNav(!showNav);

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
    <div className="w-full flex items-center justify-between gap-3">
      <p
        className="font-content font-bold text-xl flex flex-col 
      justify-start text-seagull-900"
      >
        Bine ați venit la restaurantul nostru
        {user?.name && (
          <span className="text-sm font-semibold text-seagull-600">{`Salutare ${user?.name}!`}</span>
        )}
      </p>

      <div className="flex items-center justify-center gap-4">
        <motion.div
          {...buttonClick}
          whileHover={{ scale: 1.1 }}
          onClick={menu}
          className="db:hidden group flex items-center justify-center px-3 py-2 rounded-lg 
                shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none border-none h-10
                bg-[#d2f2f7]  gap-3 cursor-pointer"
        >
          <HiBarsArrowDown className="text-2xl text-seagull-900 " />
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
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
                bg-[#d2f2f7] gap-3 cursor-pointer"
        >
          <FiLogOut className="text-xl text-seagull-900 " />
        </motion.div>

        <NavLink to="/" className="db:hidden flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-row items-center"
          >
            <img src={LogoImg} className="w-9" alt="" />
            <div className="font-logo font-semibold text-sm flex flex-col">
              <p className="text-seagull-300">Blue</p>
              <p>Mermaid</p>{" "}
            </div>
          </motion.div>
        </NavLink>
      </div>

      {showNav && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="db:hidden w-48  bg-[#bbe0eb] bg-opacity-95 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-28 right-44 px-4 py-8 z-9999 items-center font-body "
        >
          <ul className="flex flex-col items-center gap-8 font-body font-semibold">
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/home"
              onClick={() => setShowNav(false)}
            >
              Acasă
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/orders"
              onClick={() => setShowNav(false)}
            >
              Comenzi
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/items"
              onClick={() => setShowNav(false)}
            >
              Produse
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/newItem"
              onClick={() => setShowNav(false)}
            >
              Adaugă Produs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/users"
              onClick={() => setShowNav(false)}
            >
              Utilizatori
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to="/dashboard/contacts"
              onClick={() => setShowNav(false)}
            >
              Contacte
            </NavLink>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
