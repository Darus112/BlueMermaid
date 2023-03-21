import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animation";

export default function LoginInput({
  placeHolder,
  icon,
  inputState,
  inputStateFunc,
  type,
  isSignup,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 rounded-lg
     bg-seagull-300 backdrop-blur-md bg-opacity-50 w-full px-4 py-2 
      ${isFocus ? "shadow-md shadow-seagull-400" : "shadow-md"}`}
    >
      {icon}
      <input
        type={type}
        placeholder={placeHolder}
        className="font-body font-medium w-full h-full bg-transparent text-seagull-900
         placeholder:text-seagull-900 placeholder:font-light border-none outline-none"
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
}
