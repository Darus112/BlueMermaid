import React from "react";
import LogoImg from "../../assets/Img/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";

export default function DBLeftSection() {
  return (
    <div
      className="h-full py-12 flex flex-col min-w-[200px] w-[300px] gap-3
    bg-gradient-to-r from-[#ffffff] to-[#e1f7fa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <NavLink to="/" className="flex items-center justify-center">
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

      <hr className="text-seagull-600" />

      <ul className="flex flex-col gap-4">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Acasă
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Comenzi
        </NavLink>

        <NavLink
          to="/dashboard/items"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Produse
        </NavLink>

        <NavLink
          to="/dashboard/newItem"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Adaugă Produs
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Utilizatori
        </NavLink>
        <NavLink
          to="/dashboard/contacts"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Contacte
        </NavLink>
      </ul>
    </div>
  );
}
