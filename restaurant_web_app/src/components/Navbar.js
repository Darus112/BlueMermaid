import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import LogoImg from "../assets/logo.png"
import UserImg from "../assets/userImg.png"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import { MdAdd, MdLogout, MdOutlineBorderColor } from "react-icons/md"
import { AiOutlineBook } from "react-icons/ai"
import { RiContactsLine } from "react-icons/ri"
import { FaBars } from "react-icons/fa"
import { useState } from "react";

export default function Navbar() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const [showNav, setShowNav] = useState(false);
  const menu = () => setShowNav(!showNav);

  const login = async () => {
    if(!user){
      const {
        user : {refreshToken, providerData},
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch ({
        type : actionType.SET_USER,
        user : providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    }else{
        setIsMenu(!isMenu);
    }
  }

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type : actionType.SET_USER,
      user : null
    });
  };

  return (
    <nav className="nav z-50 w-screen p-3 px-1 md:p-6 md:px-16
    bg-gradient-to-t from-[#ffffff] to-[#d2f2f7]">
      {/* desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to="/" className="site-logo flex items-center gap-2 ml-14">
          <img src={LogoImg} className="w-10 object-cover" alt="logo" />
        </Link>
        <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{  opacity: 0, x: 200 }} 
        className="flex items-center gap-8">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/menu">Meniu</CustomLink>
          <CustomLink className="order-img relative flex items-center justify-center" to="/comenzi">
            <i className="fa fa-bag-shopping"/>
            <div className="w-5 h-5 rounded-full bg-gradient-to-t from-seagull-300 to-[#67e8f9]
              ml-1 mb-5 flex items-center justify-center">
              <p className="text-xs">2</p>
            </div>
          </CustomLink>
          <CustomLink to="/about">Despre</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink className="btn btn-primary" to="/booktable">Rezervare</CustomLink>
        </motion.ul>
        <div className="relative items-center flex mr-14">
          <motion.img 
          whileTap={{ scale: 0.6 }}
          src={user ? user.photoURL : UserImg} 
          className="w-10 h-10 min-w-[40px] min-h-[40px] site-logo cursor-pointer rounded-full
          shadow-[0_3px_10px_rgb(0,0,0,0.2)]" 
          alt="userprofile"
          onClick={login}/>
          {
            isMenu && (
            <motion.div 
              initial={{opacity: 0, scale: 0.6}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.6}}
              className="w-44 bg-gradient-to-tr from-seagull-300 to-[#67e8f9]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 -right-16 px-4 py2 z-50 items-center font-body">
              {user && user.email === "edarius123@gmail.com" && (
              <>
                <Link to="/newitem"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>New Item <MdAdd /></p></Link>
                <Link to="/seeorders"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Comenzi <MdOutlineBorderColor /></p></Link>
                <Link to="/seebooktable"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Rezervari <AiOutlineBook/></p></Link>
                <Link to="/seecontact"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Contact <RiContactsLine/></p></Link>
              </>
              )}
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105
              rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-2 p-2"
              onClick={logout}>Logout <MdLogout/></p>
            </motion.div>
            )}
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="site-logo flex items-center gap-2 ml-14" onClick={() => setShowNav(false)}>
          <img src={LogoImg} className="w-10 object-cover" alt="logo" />
        </Link>
        <div className="relative items-center justify-center flex mr-14">
          <motion.img 
          whileTap={{ scale: 0.6 }}
          src={user ? user.photoURL : UserImg} 
          className="w-10 h-10 min-w-[40px] min-h-[40px] site-logo cursor-pointer rounded-full
          shadow-[0_3px_10px_rgb(0,0,0,0.2)]" 
          alt="userprofile"
          onClick={login}/>
          {
            isMenu && (
            <motion.div 
              initial={{opacity: 0, scale: 0.6}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.6}}
              className="w-44 bg-gradient-to-tr from-seagull-300 to-[#67e8f9]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 px-4 py2 z-50 items-center font-body">
              {user && user.email === "edarius123@gmail.com" && (
              <>
                <Link to="/newitem"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>New Item <MdAdd /></p></Link>
                <Link to="/seeorders"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Comenzi <MdOutlineBorderColor /></p></Link>
                <Link to="/seebooktable"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Rezervari <AiOutlineBook/></p></Link>
                <Link to="/seecontact"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105" onClick={() => setIsMenu(false)}>Contact <RiContactsLine/></p></Link>
              </>
              )}
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105
              rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-2 p-2"
              onClick={logout}>Logout <MdLogout/></p>
            </motion.div>
            )}
        </div>
        <div className="relative items-center justify-center flex mr-14">
          <FaBars className="site-logo text-2xl text-seagull-300 cursor-pointer"
          onClick={menu}/>
          { showNav && (
            <motion.div 
            initial={{opacity: 0, scale: 0.6}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.6}}
            className="w-44  bg-gradient-to-tr from-[#bbe0eb] to-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
            absolute top-12 right-0 px-4 py-8 z-50 items-center font-body">
              <ul className="flex flex-col items-center gap-8">
                <CustomLink to="/" onClick={() => setShowNav(false)}>Home</CustomLink>
                <CustomLink to="/menu" onClick={() => setShowNav(false)}>Meniu</CustomLink>
                <CustomLink className="order-img relative flex items-center justify-center" to="/comenzi" onClick={() => setShowNav(false)}>
                  <i className="fa fa-bag-shopping"/>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-seagull-300 to-[#67e8f9]
                    ml-1 mb-5 flex items-center justify-center">
                    <p className="text-xs">2</p>
                  </div>
                </CustomLink>
                <CustomLink to="/about" onClick={() => setShowNav(false)}>Despre</CustomLink>
                <CustomLink to="/contact" onClick={() => setShowNav(false)}>Contact</CustomLink>
                <CustomLink to="/booktable" onClick={() => setShowNav(false)}>Rezervare</CustomLink>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}