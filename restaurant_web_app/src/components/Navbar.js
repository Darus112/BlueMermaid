import { Link, useMatch, useResolvedPath } from "react-router-dom"

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import LogoImg from "../assets/logo.png"
import UserImg from "../assets/userImg.png"
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";


export default function Navbar() {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login = async () => {
    const {
      user : {refreshToken, providerData},
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch ({
      type : actionType.SET_USER,
      user : providerData[0],
    })
  }

  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        <img src={LogoImg} className="w-10 object-cover" alt="logo" />
      </Link>
      <ul id="nav_list">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/menu">Meniu</CustomLink>
        <CustomLink className="order-img" to="/comenzi">
          <i class="fa fa-bag-shopping"/>
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 
            ml-1 mb-5 flex items-center justify-center">
            <p className="text-xs">2</p>
          </div>
        </CustomLink>
        <CustomLink to="/about">Despre</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink className="btn btn-primary" to="/booktable">Rezervare</CustomLink>
      </ul>
      <div className="relative">
        <img src={UserImg} className="w-10 h-10 min-w-[40px] min-h-[40px] site-logo cursor-pointer" 
        alt="userprofile"
        onClick={login}/>
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