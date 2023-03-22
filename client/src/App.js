import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import BookTable from "./pages/BookTable";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/login" ? null : <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className="mx-12 md:mx-40 flex flex-col justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/comenzi" element={<Orders />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {location.pathname === "/login" ? null : <Footer />}
    </>
  );
}

export default App;
