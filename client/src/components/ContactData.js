import React from "react";

import { motion } from "framer-motion";
import { buttonClick, staggerFadeInOut } from "../animation";
import {
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdSubject, MdOutlineDeleteSweep } from "react-icons/md";

export default function ContactData({ index, data }) {
  return (
    <motion.div
      {...staggerFadeInOut(index)}
      className="flex flex-col items-center justify-center w-full h-auto rounded-[2rem]
     bg-gradient-to-tr from-[#96bde9] to-[#e3e6ec] gap-4 p-8 relative
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-12 "
    >
      {" "}
      <p className="absolute top-4 left-4 font-body font-bold text-xs text-seagull-800 drop-shadow-lg">
        {index + 1}
      </p>
      <motion.div
        {...buttonClick}
        whileHover={{ scale: 1.02 }}
        className="absolute top-4 right-4 cursor-pointer drop-shadow-lg"
      >
        <MdOutlineDeleteSweep className="text-2xl" />
      </motion.div>
      <div className="flex justify-between gap-10">
        <div className="w-auto relative -top-10  ">
          <AiOutlineContacts className="absolute -top-3 -left-4 text-xl text-[#d46087] drop-shadow-lg" />
          <p
            className="font-body font-base text-seagull-900 text-sm bg-gradient-to-tr from-[#d46087] to-[#d8a79f]
         shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl  flex items-center justify-center gap-1 p-3"
          >
            Contact from:{" "}
            <span className="font-semibold text-lg text-[#8b2346] drop-shadow-lg">
              {data.contact_firstName} {data.contact_lastName}
            </span>
          </p>
        </div>
        <div className="w-auto relative -top-10">
          <AiOutlineMail className="absolute -top-3 -left-4 text-xl text-[#b2b95d] drop-shadow-lg" />
          <p
            className="font-body font-base text-seagull-900 text-sm bg-gradient-to-tr from-[#e0eb6e] to-[#e6de9a]
        shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl  flex items-center justify-center gap-1 p-3"
          >
            Email:{" "}
            <span className="font-semibold text-lg text-[#8c961f] drop-shadow-lg">
              {data.contact_email}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MdSubject className="text-xl text-[#5b80aa] drop-shadow-lg" />
        <p className="font-body font-base text-seagull-900 text-sm drop-shadow-lg rounded-3xl shadow-lg p-3">
          Subject:{" "}
          <span className="font-semibold text-lg text-[#5b80aa]">
            {data.contact_subject}
          </span>
        </p>
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-2/3 flex flex-col items-center justify-center drop-shadow-lg">
          <AiOutlineMessage className="text-xl text-[#395f8a] drop-shadow-lg" />
          <p className="font-body font-base text-seagull-900">Message:</p>
          <span
            className="font-semibold font-food px-5 text-[#395f8a]
          rounded-3xl shadow-lg p-6"
          >
            {data.contact_message}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
