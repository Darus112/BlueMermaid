import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";

import { motion } from "framer-motion";

import { Route, Routes } from "react-router-dom";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { getAllCartItems, validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animation";
import { setCartItems } from "./context/actions/cartActions";

import MainLoader from "./components/MainLoader";
import Alert from "./components/Alert";
import Dashboard from "./pages/Dashboard";
import CheckOutSuccess from "./components/CheckOutSuccess";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
  const firebaseAuth = getAuth(app);
  const [isLoadind, setIsLoadind] = useState(false);
  const alert = useSelector((state) => state.alert);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadind(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                console.log(items);
                dispatch(setCartItems(items));
              });
            }
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
      <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
        {isLoadind && (
          <motion.div
            {...fadeInOut}
            className="fixed z-50 inset-0 backdrop-blur-lg flex items-center justify-center w-full"
          >
            <MainLoader />
          </motion.div>
        )}
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
          {user?.user_id === process.env.REACT_APP_ADMIN_ID && (
            <Route path="/dashboard/*" element={<Dashboard />} />
          )}
          <Route path="/checkout-succes" element={<CheckOutSuccess />} />
          <Route path="/user-orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
      </div>
    </>
  );
}

export default App;
