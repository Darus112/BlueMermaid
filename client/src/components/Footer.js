import React from "react";
import LogoImg from "../assets/Img/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer
        className="flex flex-col md:flex-row justify-evenly bg-gray-900 py-4
    bg-seagull-100 w-full px-20 gap-12"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <img src={LogoImg} className="w-20" alt="" />
            <div className="font-logo font-semibold text-3xl flex flex-col">
              <p className="text-seagull-300">Blue</p>
              <p>Mermaid</p>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center font-body text-seagull-900 gap-y-2">
          <h1 className="font-bold text-3xl">Links</h1>
          <NavLink to="/" className="font-light hover:text-seagull-300">
            Home
          </NavLink>
          <NavLink to="/menu" className="font-light hover:text-seagull-300">
            Menu
          </NavLink>
          <NavLink to="/aboutus" className="font-light hover:text-seagull-300">
            About us
          </NavLink>
        </div>
        <div className="flex flex-col items-center font-body text-seagull-900 gap-y-2">
          <h1 className="font-body text-seagull-900 font-bold text-3xl">
            Support
          </h1>
          <NavLink to="/contact" className="font-light hover:text-seagull-300">
            Contact
          </NavLink>
        </div>
        <div className="flex flex-col items-center font-body text-seagull-900 gap-y-2">
          <h1 className="font-body text-seagull-900 font-bold text-3xl">
            Contact
          </h1>
          <p className="font-light">+344452156345</p>
          <p className="font-light">Blue_mermaid@gmail.com</p>
          <p className="font-light">GEC Circle, Barcelona, Seafood</p>
        </div>
      </footer>
      <div>
        <p className="text-center text-[#a1a1a1] text-sm font-body font-extralight">
          &copy; copyright {currentYear} | Blue Mermaid All Rights Reserved
        </p>
      </div>
    </>
  );
}
