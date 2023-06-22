import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animation";

import { FaCheck, FaExclamation } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { TiWarning } from "react-icons/ti";

export default function Alert({ type, message }) {
  // Dacă tipul este "success", afișăm o alertă de succes
  if (type === "success") {
    return (
      <motion.div
        className="fixed z-50 top-12 right-12 px-4 py-1 rounded-md 
    backdrop-blur-sm bg-[#9af1c6] shadow-md flex items-center gap-3"
        {...fadeInOut}
      >
        <FaCheck className="text-lg text-[#50c878] " />
        <p className="font-body text-lg text-[#50c878]">{message}</p>
      </motion.div>
    );
  }

  //  Dacă tipul este "warning", afișăm o alertă de avertizare
  if (type === "warning") {
    return (
      <motion.div
        className="fixed z-50 top-12 right-12 px-4 py-1 rounded-md 
    backdrop-blur-sm bg-[#f1b790] shadow-md flex items-center gap-3"
        {...fadeInOut}
      >
        <TiWarning className="text-xl text-[#cc621c] " />
        <p className="font-body text-lg text-[#cc621c]">{message}</p>
      </motion.div>
    );
  }

  // Dacă tipul este "danger", afișăm o alertă de pericol
  if (type === "danger") {
    return (
      <motion.div
        className="fixed z-50 top-12 right-12 px-4 py-1 rounded-md 
    backdrop-blur-sm bg-[#f37474] shadow-md flex items-center gap-3"
        {...fadeInOut}
      >
        <RiErrorWarningFill className="text-xl text-[#cc1212] " />
        <p className="font-body text-lg text-[#cc1212]">{message}</p>
      </motion.div>
    );
  }

  // Dacă tipul este "info", afișăm o alertă de informare
  if (type === "info") {
    return (
      <motion.div
        className="fixed z-50 top-12 right-12 px-4 py-1 rounded-md 
    backdrop-blur-sm bg-[#9aeef1] shadow-md flex items-center gap-3"
        {...fadeInOut}
      >
        <FaExclamation className="text-lg text-[#50bac8] " />
        <p className="font-body text-lg text-[#50bac8]">{message}</p>
      </motion.div>
    );
  }
}
