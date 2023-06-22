import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { setUserDetails } from "../context/actions/userActions";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../config/firebase.config";

import bgImg from "../assets/Img/bg_1.jpg";
import LogoImg from "../assets/Img/logo.png";
import LoginInput from "../components/LoginInput";
import { buttonClick } from "../animation";
import { validateUserJWTToken } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  alertInfo,
  alertWarning,
  alertNULL,
  alertSucces,
} from "../context/actions/alertActions";

export default function Login() {
  // Inițializăm stările locale pentru email, modul de înregistrare, parola și confirmarea parolei
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Obținem instanța Firebase Authentication
  const firebaseAuth = getAuth(app);

  // Instanțiem un provider Google pentru autentificarea cu Google
  const provider = new GoogleAuthProvider();

  // Obținem funcția de navigare din biblioteca react-router-dom
  const navigate = useNavigate();

  // Obținem funcția de dispatch din Redux pentru a permite declanșarea acțiunilor
  const dispatch = useDispatch();

  // Selectăm utilizatorul și starea de alertă din starea globală Redux
  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);

  // Folosim hook-ul useEffect pentru a redirecționa utilizatorul către pagina principală dacă acesta este autentificat
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  // Metoda de autentificare cu Google
  const loginWithGoogle = async () => {
    // Încercăm să autentificăm utilizatorul cu Google
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      // Dacă autentificarea a reușit, verificăm starea autentificării
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          // Dacă utilizatorul este autentificat, validăm tokenul JWT și salvăm detaliile acestuia în starea globală
          cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) => {
              dispatch(setUserDetails(data));
            });
            navigate("/", { replace: true });
          });
        }
      });
    });
  };

  // Metoda de înregistrare cu email și parolă
  const signUpWithEmailPass = async () => {
    // Verificăm dacă toate câmpurile au fost completate
    if (userEmail === "" || password === "" || confirmPassword === "") {
      // Dacă nu, declanșăm o alertă
      dispatch(alertInfo("Câmpurile obligatorii nu ar trebui să fie goale"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    } else {
      // Verificăm dacă parolele se potrivesc
      if (password === confirmPassword) {
        // Dacă da, încercăm să înregistrăm utilizatorul
        setUserEmail("");
        setConfirmPassword("");
        setPassword("");
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred) => {
          // Dacă înregistrarea a reușit, verificăm starea autentificării
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              // Dacă utilizatorul este autentificat, validăm tokenul JWT și salvăm detaliile acestuia în starea globală
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        });
      } else {
        // Dacă parolele nu se potrivesc, declanșăm o alertă
        dispatch(alertWarning("Parola nu se potrivește"));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      }
    }
  };

  // Metoda de autentificare cu email și parolă
  const signInWithEmailPass = async () => {
    // Verificăm dacă câmpurile de email și parolă sunt completate
    if (userEmail !== "" && password !== "") {
      // Dacă da, încercăm să autentificăm utilizatorul
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          // Dacă autentificarea a reușit, verificăm starea autentificării
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              // Dacă utilizatorul este autentificat, validăm tokenul JWT și salvăm detaliile acestuia în starea globală
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate("/", { replace: true });
              });
            }
          });
        }
      );
    } else {
      // Dacă nu, declanșăm o alertă
      dispatch(alertWarning("Parolă sau adresă de email incorectă"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* imagine fundal */}
      <Fade>
        <img
          src={bgImg}
          className="w-full h-full object-cover absolute top-0 left-0"
          alt="bg"
        />
      </Fade>

      {/* cutie content */}
      <Bounce>
        <div
          className="flex flex-col items-center backdrop-blur-lg w-[680px] h-[800px] 
                z-10 rounded-[3rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-seagull-300 bg-opacity-20
                p-4 px-4 py-12 mx-2"
        >
          {/* cutie content */}
          <div className="flex items-center justify-start gap-1 w-full ml-5">
            <img src={LogoImg} className="w-9" alt="" />
            <div className="font-logo font-semibold text-sm flex flex-col">
              <p className="text-seagull-300">Blue</p>
              <p>Mermaid</p>{" "}
            </div>
          </div>

          {/* optiuni logare */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-body font-medium text-seagull-900 text-opacity-60">
              {isSignUp ? "Înregistrează-te" : "Autentifică-te"} cu următoarele
            </p>
          </div>

          {/* sectiune intrare */}
          <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4 mt-20">
            <LoginInput
              placeHolder={"Email aici"}
              icon={<MdEmail className="text-xl text-seagull-900" />}
              inputState={userEmail}
              inputStateFunc={setUserEmail}
              type="email"
              isSignup={isSignUp}
            />
            <LoginInput
              placeHolder={"Parolă aici"}
              icon={<RiLockPasswordFill className="text-xl text-seagull-900" />}
              inputState={password}
              inputStateFunc={setPassword}
              type="password"
              isSignup={isSignUp}
            />

            {isSignUp && (
              <LoginInput
                placeHolder={"Confirmă parola aici"}
                icon={
                  <RiLockPasswordFill className="text-xl text-seagull-900" />
                }
                inputState={confirmPassword}
                inputStateFunc={setConfirmPassword}
                type="password"
                isSignup={isSignUp}
              />
            )}

            {!isSignUp ? (
              <p className="font-body text-xs font-medium">
                Nu ai un cont:{" "}
                <motion.button
                  {...buttonClick}
                  className="text-[#fa2f2f] underline cursor-pointer 
                  bg-transparent border-none outline-none"
                  onClick={() => setIsSignUp(true)}
                >
                  Creează unul
                </motion.button>
              </p>
            ) : (
              <p className="font-body text-xs font-medium">
                Deja ai un cont:{" "}
                <motion.button
                  {...buttonClick}
                  className="text-[#fa2f2f] underline cursor-pointer 
                bg-transparent border-none outline-none"
                  onClick={() => setIsSignUp(false)}
                >
                  Autentifică-te aici
                </motion.button>
              </p>
            )}

            {/* button section */}
            {isSignUp ? (
              <motion.button
                {...buttonClick}
                className="w-1/3 px-4 py-2 rounded-lg bg-[#f07878] 
              cursor-pointer font-body text-white
              shadow-lg hover:shadow-[#dd6f6f] text-xl border-none outline-none"
                onClick={signUpWithEmailPass}
              >
                ÎNREGISTRARE
              </motion.button>
            ) : (
              <motion.button
                {...buttonClick}
                className="w-1/3 px-4 py-2 rounded-lg bg-[#f07878] 
              cursor-pointer font-body  text-white
              shadow-lg hover:shadow-[#dd6f6f] text-xl border-none outline-none"
                onClick={signInWithEmailPass}
              >
                AUTENTIFICARE
              </motion.button>
            )}
          </div>

          <div className="mt-12 flex items-center justify-between gap-16">
            <div className="w-40 h-[1px] rounded-xl bg-seagull-100"></div>
            <p className="font-body text-seagull-100 font-extralight">sau</p>
            <div className="w-40 h-[1px] rounded-xl bg-seagull-100"></div>
          </div>

          <motion.div
            {...buttonClick}
            className="flex items-center px-20 py-2 bg-white bg-opacity-60 
            cursor-pointer rounded-3xl gap-4 border-none outline-none mt-12
            justify-center shadow-lg hover:shadow-[#afafaf]"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="text-3xl" />
            <p className=" font-body font-extralight">
              Autentifică-te cu Google
            </p>
          </motion.div>

          <Link to="/">
            <motion.p
              {...buttonClick}
              whileHover={{ scale: 1.1 }}
              className="font-body text-seagull-900 font-light bottom-5 
              right-7 absolute underline"
            >
              mergi acasă
            </motion.p>
          </Link>
        </div>
      </Bounce>
    </div>
  );
}
