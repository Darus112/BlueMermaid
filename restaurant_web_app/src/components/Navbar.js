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
import { useState } from "react";

export default function Navbar() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false) 

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

  return (
    <nav className="nav mx-px">
      <Link to="/" className="site-logo">
        <img src={LogoImg} className="w-10 object-cover" alt="logo" />
      </Link>
      <ul id="nav_list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/menu">Meniu</CustomLink>
        <CustomLink className="order-img" to="/comenzi">
          <i className="fa fa-bag-shopping"/>
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-seagull-300 to-[#67e8f9]
            ml-1 mb-5 flex items-center justify-center">
            <p className="text-xs">2</p>
          </div>
        </CustomLink>
        <CustomLink to="/about">Despre</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink className="btn btn-primary" to="/booktable">Rezervare</CustomLink>
      </ul>
      <div className="relative items-center justify-center flex">
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
            className="w-40 bg-gradient-to-tr from-seagull-300 to-[#67e8f9]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg flex flex-col 
          absolute z-50 mt-72 items-center font-body">
            {user && user.email === "edarius123@gmail.com" && (
            <>
              <Link to="/newitem"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105">New Item <MdAdd /></p></Link>
              <Link to="/seeorders"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105">Comenzi <MdOutlineBorderColor /></p></Link>
              <Link to="/seebooktable"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105">Rezervari <AiOutlineBook/></p></Link>
              <Link to="/seecontact"><p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105">Contact <RiContactsLine/></p></Link>
            </>
            )}
            <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:scale-105">Logout <MdLogout/></p>
          </motion.div>
          )}
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