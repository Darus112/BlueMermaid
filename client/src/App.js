import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import BookTable from "./pages/BookTable";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { getAllUsers, validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";

import { setUserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animation";
import MainLoader from "./components/MainLoader";
import Alert from "./components/Alert";
import Dashboard from "./pages/Dashboard";
import { setAllUserDetails } from "./context/actions/allUsersActions";

function App() {
  const location = useLocation();
  const firebaseAuth = getAuth(app);
  const [isLoadind, setIsLoadind] = useState(false);
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadind(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setIsLoadind(false);
      }, 3000);
    });
  }, []);

  return (
    <>
      {isLoadind && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 backdrop-blur-lg flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}
      {location.pathname === "/login" ||
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/home" ||
      location.pathname === "/dashboard/orders" ||
      location.pathname === "/dashboard/items" ||
      location.pathname === "/dashboard/newItem" ||
      location.pathname === "/dashboard/users" ? null : (
        <Navbar />
      )}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
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
      {location.pathname === "/login" ||
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/home" ||
      location.pathname === "/dashboard/orders" ||
      location.pathname === "/dashboard/items" ||
      location.pathname === "/dashboard/newItem" ||
      location.pathname === "/dashboard/users" ? null : (
        <Footer />
      )}

      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </>
  );
}

export default App;
