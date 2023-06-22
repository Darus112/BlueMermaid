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
  // obtinem referinta la serviciul de autentificare Firebase
  const firebaseAuth = getAuth(app);

  // definim starea locala pentru a urmari daca aplicatia este in incarcare
  const [isLoadind, setIsLoadind] = useState(false);

  // selectam starea alertei din starea globala (Redux)
  const alert = useSelector((state) => state.alert);

  // selectam informatiile despre user din starea globala (Redux)
  const user = useSelector((state) => state.user);

  // obtinem functia dispatch pentru a trimite actiuni catre store-ul Redux
  const dispatch = useDispatch();

  // folosim efectul pentru a verifica starea de autentificare a utilizatorului
  useEffect(() => {
    setIsLoadind(true);
    // urmarim schimbarile starii de autentificare
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        // daca utilizatorul este autentificat, obtinem tokenul JWT
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              // daca tokenul este valid, obtinem toate articolele din cosul de cumparaturi al utilizatorului
              getAllCartItems(data.user_id).then((items) => {
                console.log(items);
                // actualizam starea globala cu articolele din cos
                dispatch(setCartItems(items));
              });
            }
            // actualizam starea globala cu detalii despre utilizator
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
        {/* Aici definim rutele noastre. */}
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
        {/* Afisam alerta daca exista. */}
        {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
      </div>
    </>
  );
}

export default App;
