import React from "react";
import LogoImg from "../../assets/Img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { isActiveStyles, isNotActiveStyles } from "../../utils/styles";

export default function DBLeftSection() {
  return (
    <div
      className="h-full py-12 flex flex-col min-w-[200px] w-[300px] gap-3
    bg-gradient-to-r from-[#ffffff] to-[#e1f7fa] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <Link to="/" className="flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-row items-center"
        >
          <img src={LogoImg} className="w-10 object-cover" alt="logo" />
          <p className="font-body text-seagull-700 text-sm">go home</p>
        </motion.div>
      </Link>

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
          Home
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/dashboard/items"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Items
        </NavLink>

        <NavLink
          to="/dashboard/newItem"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Add New Item
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8 border-seagull-300`
              : isNotActiveStyles
          }
        >
          Users
        </NavLink>
      </ul>
    </div>
  );
}
