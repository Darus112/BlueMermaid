import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";

import LogoImg from "../assets/Img/logo.png";
import UserImg from "../assets/Img/userImg.png";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const menu = () => setShowNav(!showNav);

  return (
    <nav
      className="nav z-50 w-100% p-3 px-1 md:p-6 md:px-16
    bg-gradient-to-t from-[#ffffff] to-[#d2f2f7] font-semibold"
    >
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between gap-4">
        <Link to="/" className="site-logo flex items-center gap-2 ml-14">
          <img src={LogoImg} className="w-10 object-cover" alt="logo" />
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8"
        >
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/menu">Meniu</CustomLink>
          <CustomLink
            className="order-img relative flex items-center justify-center"
            to="/comenzi"
          >
            <i className="fa fa-bag-shopping" />
            <div
              className="w-5 h-5 rounded-full bg-gradient-to-t from-seagull-300 to-[#67e8f9]
               ml-1 mb-5 flex items-center justify-center"
            >
              <p className="text-xs">2</p>
            </div>
          </CustomLink>
          <CustomLink to="/about">Despre</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink className="btn btn-primary" to="/booktable">
            Rezervare
          </CustomLink>
        </motion.ul>
        <div className="relative items-center flex mr-14">
          <Link to="/login">
            <motion.div
              whileTap={{ scale: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className=" cursor-pointer"
            >
              <img
                src={UserImg}
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                alt="userprofile"
              />
              <p className="font-body">Login</p>
            </motion.div>
          </Link>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-44 bg-gradient-to-tr from-seagull-300 to-[#67e8f9]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 -right-16 px-4 py2 z-50 items-center font-body"
            ></motion.div>
          )}
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link
          to="/"
          className="site-logo flex items-center gap-2 ml-14"
          onClick={() => setShowNav(false)}
        >
          <img src={LogoImg} className="w-10 object-cover" alt="logo" />
        </Link>
        <div className="relative items-center justify-center flex mr-14">
          <Link to="/login">
            <motion.div
              whileTap={{ scale: 0.6 }}
              whileHover={{ scale: 1.1 }}
              className=" cursor-pointer"
            >
              <img
                src={UserImg}
                className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                alt="userprofile"
              />
              <p className="font-body">Login</p>
            </motion.div>
          </Link>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-44 bg-gradient-to-tr from-seagull-300 to-[#67e8f9]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 px-4 py2 z-50 items-center font-body"
            ></motion.div>
          )}
        </div>
        <div className="relative items-center justify-center flex mr-14">
          <FaBars
            className="site-logo text-2xl text-seagull-300 cursor-pointer"
            onClick={menu}
          />
          {showNav && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-44  bg-gradient-to-tr from-[#bbe0eb] to-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 right-0 px-4 py-8 z-50 items-center font-body"
            >
              <ul className="flex flex-col items-center gap-8">
                <CustomLink to="/" onClick={() => setShowNav(false)}>
                  Home
                </CustomLink>
                <CustomLink to="/menu" onClick={() => setShowNav(false)}>
                  Meniu
                </CustomLink>
                <CustomLink
                  className="order-img relative flex items-center justify-center"
                  to="/comenzi"
                  onClick={() => setShowNav(false)}
                >
                  <i className="fa fa-bag-shopping" />

                  <div
                    className="w-5 h-5 rounded-full bg-gradient-to-t from-seagull-300 to-[#67e8f9]
                     ml-1 mb-5 flex items-center justify-center"
                  >
                    <p className="text-xs">2</p>
                  </div>
                </CustomLink>
                <CustomLink to="/about" onClick={() => setShowNav(false)}>
                  Despre
                </CustomLink>
                <CustomLink to="/contact" onClick={() => setShowNav(false)}>
                  Contact
                </CustomLink>
                <CustomLink to="/booktable" onClick={() => setShowNav(false)}>
                  Rezervare
                </CustomLink>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
