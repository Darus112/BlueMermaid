import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";

import LogoImg from "../assets/Img/logo.png";
import UserImg from "../assets/Img/userImg.png";

import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsBorderStyle } from "react-icons/bs";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buttonClick, fadeInOut, slideTop } from "../animation";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const user = useSelector((state) => state.user);

  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menu = () => setShowNav(!showNav);

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
          {user ? (
            <div
              className="relative flex justify-center"
              onMouseEnter={() => setIsMenu(true)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className=" cursor-pointer"
              >
                <img
                  src={user?.picture ? user?.picture : UserImg}
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className="px-6 py-4 w-44 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
              bg-gradient-to-tr from-seagull-300 to-[#67e8f9] rounded-lg
              absolute top-12 flex flex-col gap-4 text-center z-50 mr-32"
                >
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/dashboard/home"}
                  >
                    <MdOutlineDashboardCustomize className="text-2xl" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/profile"}
                  >
                    <CgProfile className="text-2xl" /> My Profile
                  </Link>
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/user-orders"}
                  >
                    <BsBorderStyle className="text-2xl" />
                    Orders
                  </Link>
                  <hr />

                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-lg 
                shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none border-none
                bg-seagull-300 bg-opacity-30 hover:bg-opacity-75 gap-3 cursor-pointer"
                  >
                    <FiLogOut
                      className="text-xl text-seagull-900 font-bold 
                  group-hover:text-seagull-50"
                    />
                    <p
                      className="font-body font-bold text-sm text-seagull-900
                  group-hover:text-seagull-50"
                    >
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            <>
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
                    alt="loginImg"
                  />
                  <p className="font-body">Login</p>
                </motion.div>
              </Link>
            </>
          )}
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
          {user ? (
            <div
              onClick={() => setIsMenu(!isMenu)}
              className="relative flex justify-center"
            >
              <motion.div
                whileTap={{ scale: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className=" cursor-pointer"
              >
                <img
                  src={user?.picture ? user?.picture : UserImg}
                  className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full
              shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {isMenu && (
                <motion.div
                  {...fadeInOut}
                  className="px-6 py-4 w-44 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
                bg-gradient-to-tr from-seagull-300 to-[#67e8f9] rounded-lg
                absolute top-12 flex flex-col gap-4 text-center z-50"
                >
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/dashboard/home"}
                  >
                    <MdOutlineDashboardCustomize className="text-2xl" />{" "}
                    Dashboard
                  </Link>
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/profile"}
                  >
                    <CgProfile className="text-2xl" /> My Profile
                  </Link>
                  <Link
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/user-orders"}
                  >
                    <BsBorderStyle className="text-2xl" />
                    Orders
                  </Link>
                  <hr />

                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-lg 
                  shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none border-none
                bg-seagull-300 bg-opacity-30 hover:bg-opacity-75 gap-3 cursor-pointer"
                  >
                    <FiLogOut
                      className="text-xl text-seagull-900 font-bold 
                  group-hover:text-seagull-50"
                    />
                    <p
                      className="font-body font-bold text-sm text-seagull-900
                  group-hover:text-seagull-50"
                    >
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            <>
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
                    alt="loginImg"
                  />
                  <p className="font-body">Login</p>
                </motion.div>
              </Link>
            </>
          )}
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
