import {
  Link,
  NavLink,
  useMatch,
  useNavigate,
  useResolvedPath,
} from "react-router-dom";
import { motion } from "framer-motion";

import LogoImg from "../assets/Img/logo.png";
import UserImg from "../assets/Img/userImg.png";

import { TbPaperBag } from "react-icons/tb";
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
import { isActiveStyles2, isNotActiveStyles2 } from "../utils/styles";
import { setCartOn } from "../context/actions/displayCartAction";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

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
    <>
      {/* desktop */}
      <header
        className="hidden md:flex bg-seagull-300 
      fixed z-40 inset-x-0 top-0 items-center justify-between px-12 md:px-20 py-6
      backdrop-blur-md bg-opacity-5 shadow-sm"
      >
        <NavLink to="/" className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-row items-center"
          >
            <img src={LogoImg} className="w-12" alt="" />
            <div className="font-logo font-semibold text-base flex flex-col">
              <p className="text-seagull-300">Blue</p>
              <p>Mermaid</p>{" "}
            </div>
          </motion.div>
        </NavLink>

        <nav className="flex items-center justify-center gap-8 ml-5">
          <ul className="flex items-center justify-center gap-7 text-sm">
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to={"/menu"}
            >
              Menu
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to={"/aboutus"}
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? isActiveStyles2 : isNotActiveStyles2
              }
              to={"/booktable"}
            >
              Book Table
            </NavLink>
          </ul>
          <motion.div
            {...buttonClick}
            onClick={() => dispatch(setCartOn())}
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer mr-8"
          >
            <TbPaperBag className=" text-3xl" />
            {cart?.length > 0 && (
              <div
                className="w-5 h-5 rounded-full bg-gradient-to-t from-seagull-300 to-[#67e8f9]
              mb-5 flex items-center justify-center border-2 absolute -top-4 -right-4"
              >
                <p className="text-xs font-body font-semibold">
                  {cart?.length}
                </p>
              </div>
            )}
          </motion.div>
        </nav>

        {user ? (
          <div
            className="relative flex justify-center"
            onMouseEnter={() => setIsMenu(true)}
          >
            <motion.div whileHover={{ scale: 1.1 }} className=" cursor-pointer">
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
                {user?.user_id === process.env.REACT_APP_ADMIN_ID && (
                  <NavLink
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/dashboard/home"}
                  >
                    <MdOutlineDashboardCustomize className="text-2xl" />{" "}
                    Dashboard
                  </NavLink>
                )}
                <NavLink
                  className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                  to={"/profile"}
                >
                  <CgProfile className="text-2xl" /> My Profile
                </NavLink>
                <NavLink
                  className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                  to={"/user-orders"}
                >
                  <BsBorderStyle className="text-2xl" />
                  Orders
                </NavLink>
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
            <NavLink to="/login">
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
                <p className="font-body font-semibold text-sm">Login</p>
              </motion.div>
            </NavLink>
          </>
        )}
      </header>
      {/* mobile */}
      <header
        className="flex md:hidden bg-seagull-300
      fixed z-40 inset-x-0 top-0 items-center justify-between px-12 md:px-20 py-6
      backdrop-blur-md bg-opacity-5 shadow-sm"
      >
        <NavLink to="/" className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-row items-center"
          >
            <img src={LogoImg} className="w-12" alt="" />
            <div className="font-logo font-semibold text-base flex flex-col">
              <p className="text-seagull-300">Blue</p>
              <p>Mermaid</p>{" "}
            </div>
          </motion.div>
        </NavLink>

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
                  {user?.user_id === process.env.REACT_APP_ADMIN_ID && (
                    <NavLink
                      className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                      to={"/dashboard/home"}
                    >
                      <MdOutlineDashboardCustomize className="text-2xl" />{" "}
                      Dashboard
                    </NavLink>
                  )}
                  <NavLink
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/profile"}
                  >
                    <CgProfile className="text-2xl" /> My Profile
                  </NavLink>
                  <NavLink
                    className="hover:text-seagull-50 font-body font-semibold text-seagull-900 flex flex-row gap-2"
                    to={"/user-orders"}
                  >
                    <BsBorderStyle className="text-2xl" />
                    Orders
                  </NavLink>
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
              <NavLink to="/login">
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
              </NavLink>
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

        <div className="relative items-center justify-center flex gap-5">
          <motion.div
            {...buttonClick}
            onClick={() => dispatch(setCartOn())}
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer"
          >
            <TbPaperBag className=" text-3xl" />
            {cart?.length > 0 && (
              <div
                className="w-5 h-5 rounded-full bg-gradient-to-t from-seagull-300 to-[#67e8f9]
              mb-5 flex items-center justify-center border-2 absolute -top-4 -right-4"
              >
                <p className="text-xs font-body font-semibold">
                  {cart?.length}
                </p>
              </div>
            )}
          </motion.div>
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
              <ul className="flex flex-col items-center gap-8 font-body font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyles2 : isNotActiveStyles2
                  }
                  to="/"
                  onClick={() => setShowNav(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyles2 : isNotActiveStyles2
                  }
                  to="/menu"
                  onClick={() => setShowNav(false)}
                >
                  Menu
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyles2 : isNotActiveStyles2
                  }
                  to="/aboutus"
                  onClick={() => setShowNav(false)}
                >
                  About Us
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyles2 : isNotActiveStyles2
                  }
                  to="/contact"
                  onClick={() => setShowNav(false)}
                >
                  Contact
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? isActiveStyles2 : isNotActiveStyles2
                  }
                  to="/booktable"
                  onClick={() => setShowNav(false)}
                >
                  Book Table
                </NavLink>
              </ul>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
}
