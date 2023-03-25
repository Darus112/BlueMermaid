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
  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  // actions

  // reducer

  // store -> globalized

  // dispatch

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
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

  const signUpWithEmailPass = async () => {
    if (userEmail === "" || password === "" || confirmPassword === "") {
      //alert message
      dispatch(alertInfo("Required fields shouldn't be empty"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    } else {
      if (password === confirmPassword) {
        setUserEmail("");
        setConfirmPassword("");
        setPassword("");
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
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
        //alert message
        dispatch(alertWarning("Password doesn't match"));
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
      }
    }
  };

  const signInWithEmailPass = async () => {
    if (userEmail !== "" && password !== "") {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
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
      //alert message
      dispatch(alertWarning("Password or Email incorect"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* background image */}
      <Fade>
        <img
          src={bgImg}
          className="w-full h-full object-cover absolute top-0 left-0"
          alt="bg"
        />
      </Fade>

      {/* content box */}
      <Bounce>
        <div
          className="flex flex-col items-center backdrop-blur-lg w-[680px] h-[900px] 
                z-10 rounded-[3rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-seagull-300 bg-opacity-20
                p-4 px-4 py-12 mx-2"
        >
          {/* content box */}
          <div className="flex items-center justify-start gap-4 w-full ml-5">
            <img src={LogoImg} className="w-8" alt="logo" />
          </div>

          {/* sign in option */}
          <div className="flex items-center justify-center">
            <p className="text-xl font-body font-medium text-seagull-900 text-opacity-60">
              {isSignUp ? "Sign-up" : "Sign-in"} with following
            </p>
          </div>

          {/* input section */}
          <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4 mt-20">
            <LoginInput
              placeHolder={"Email here"}
              icon={<MdEmail className="text-xl text-seagull-900" />}
              inputState={userEmail}
              inputStateFunc={setUserEmail}
              type="email"
              isSignup={isSignUp}
            />
            <LoginInput
              placeHolder={"Password here"}
              icon={<RiLockPasswordFill className="text-xl text-seagull-900" />}
              inputState={password}
              inputStateFunc={setPassword}
              type="password"
              isSignup={isSignUp}
            />

            {isSignUp && (
              <LoginInput
                placeHolder={"Confrim password here"}
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
                Doesn't have an account:{" "}
                <motion.button
                  {...buttonClick}
                  className="text-[#fa2f2f] underline cursor-pointer 
                  bg-transparent border-none outline-none"
                  onClick={() => setIsSignUp(true)}
                >
                  Create one
                </motion.button>
              </p>
            ) : (
              <p className="font-body text-xs font-medium">
                Already have an account:{" "}
                <motion.button
                  {...buttonClick}
                  className="text-[#fa2f2f] underline cursor-pointer 
                bg-transparent border-none outline-none"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign-in here
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
                SIGN UP
              </motion.button>
            ) : (
              <motion.button
                {...buttonClick}
                className="w-1/3 px-4 py-2 rounded-lg bg-[#f07878] 
              cursor-pointer font-body  text-white
              shadow-lg hover:shadow-[#dd6f6f] text-xl border-none outline-none"
                onClick={signInWithEmailPass}
              >
                SIGN IN
              </motion.button>
            )}
          </div>

          <div className="mt-12 flex items-center justify-between gap-16">
            <div className="w-40 h-[1px] rounded-xl bg-seagull-100"></div>
            <p className="font-body text-seagull-100 font-extralight">or</p>
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
            <p className="capitalize font-body font-extralight">
              Sign-in with Google
            </p>
          </motion.div>

          <Link to="/">
            <motion.p
              {...buttonClick}
              whileHover={{ scale: 1.1 }}
              className="font-body text-seagull-900 font-light bottom-5 
              right-7 absolute underline"
            >
              go home
            </motion.p>
          </Link>
        </div>
      </Bounce>
    </div>
  );
}
