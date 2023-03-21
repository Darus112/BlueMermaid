import React from "react";
import bgImg from "../assets/Img/bg_1.jpg";
import LogoImg from "../assets/Img/logo.png";

export default function Login() {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* background image */}

      <img
        src={bgImg}
        className="w-full h-full object-cover absolute top-0 left-0"
        alt="bg"
      />

      {/* content box */}
      <div
        className="flex flex-col items-cente backdrop-blur-lg w-[680px] h-[900px] 
                z-10 rounded-[3rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-seagull-300 bg-opacity-20
                p-4 px-4 py-12
            "
      >
        {/* content box */}
        <div className="flex items-center justify-start gap-4 w-full ml-5">
          <img src={LogoImg} className="w-8" alt="logo" />
        </div>

        {/* sign in option */}
        <div className="flex items-center justify-center">
          <p className="text-xl font-body font-medium text-seagull-900 text-opacity-60">
            {" "}
            Sign-in with following
          </p>
        </div>
      </div>
    </div>
  );
}
