import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import BookTable from "./pages/BookTable";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NewItem from "./pages/admin/NewItem";
import SeeOrders from "./pages/admin/SeeOrders";
import SeeBookTable from "./pages/admin/SeeBookTable";
import SeeContact from "./pages/admin/SeeContact";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
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
            <Route path="/newitem" element={<NewItem />} />
            <Route path="/seeorders" element={<SeeOrders />} />
            <Route path="/seebooktable" element={<SeeBookTable />} />
            <Route path="/seecontact" element={<SeeContact />} />
          </Routes>
        </div>
      </AnimatePresence>
      {location.pathname === "/login" ? null : <Footer />}
    </>
  );
}

export default App;
