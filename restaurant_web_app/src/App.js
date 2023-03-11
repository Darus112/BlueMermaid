import React from "react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Orders from "./pages/Orders"
import BookTable from "./pages/BookTable"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NewItem from "./pages/admin/NewItem"
import SeeOrders from "./pages/admin/SeeOrders"
import SeeBookTable from "./pages/admin/SeeBookTable"
import SeeContact from "./pages/admin/SeeContact"

import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <>
    <AnimatePresence >
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/comenzi" element={<Orders />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/newitem" element={<NewItem />} />
          <Route path="/seeorders" element={<SeeOrders />} />
          <Route path="/seebooktable" element={<SeeBookTable />} />
          <Route path="/seecontact" element={<SeeContact />} />
        </Routes>
        </div>
        </AnimatePresence>
        <Footer />
    </>
  )
}

export default App