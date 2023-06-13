import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";

import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../context/actions/productActions";
import { getAllContacts, getAllProducts, getAllUsers } from "../api";
import Cart from "../components/Cart";
import { setAllUserDetails } from "../context/actions/allUsersActions";
import { setAllContacts } from "../context/actions/contactActions";

export default function Main() {
  const products = useSelector((state) => state.products);
  const allUsers = useSelector((state) => state.allUsers);
  const contacts = useSelector((state) => state.contacts);

  const isCart = useSelector((state) => state.isCart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, [products]);

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, [allUsers]);

  useEffect(() => {
    if (!contacts) {
      getAllContacts().then((data) => {
        dispatch(setAllContacts(data));
      });
    }
  }, [contacts]);

  return (
    <main className="w-screen min-h-screen flex items-center flex-col bg-seagull-100">
      <Navbar />
      <div
        className="w-full flex flex-col items-center justify-center mb-1
      px-6 md:px-24 2xl:px-96"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {isCart && <Cart />}
      <Footer />
    </main>
  );
}
