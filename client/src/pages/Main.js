import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import Home from "./Home";
import Menu from "./Menu";
import Orders from "./Orders";
import About from "./About";
import Contact from "./Contact";
import BookTable from "./BookTable";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../context/actions/productActions";
import { getAllProducts } from "../api";

export default function Main() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  return (
    <main className="w-screen min-h-screen flex items-center flex-col">
      <Navbar />
      <div
        className="w-full flex flex-col items-center justify-center mt-40
      px-6 md:px-24 2xl:px-96"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}
