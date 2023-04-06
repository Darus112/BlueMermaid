import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import {
  alertDanger,
  alertNULL,
  alertSucces,
} from "../context/actions/alertActions";
import { addNewContact, getAllContacts } from "../api";
import { setAllContacts } from "../context/actions/contactActions";
import { buttonClick } from "../animation";

import { motion } from "framer-motion";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const send = () => {
    const data = {
      contact_firstName: firstName,
      contact_lastName: lastName,
      contact_email: email,
      contact_subject: subject,
      contact_message: message,
    };
    if (!firstName || !lastName || !email || !subject || !message) {
      dispatch(alertDanger("Complete all fields"));
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    } else {
      addNewContact(data).then((res) => {
        dispatch(alertSucces("Send successfully"));
        getAllContacts().then((data) => {
          dispatch(setAllContacts(data));
        });
        setTimeout(() => {
          dispatch(alertNULL());
        }, 3000);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
      });
    }
  };
  return (
    <div className="flex items-center justify-center flex-col pt-6 px-24 w-full mt-12">
      <div className="p-4 w-full flex flex-col items-center gap-12">
        <div className="flex flex-row w-full gap-x-12">
          <Fade left>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <p className="ml-7 font-body text-seagull-900 font-semibold text-xl">
                First Name
              </p>
              <InputValueField
                type="text"
                placeHolder={". . ."}
                stateFunc={setFirstName}
                stateValue={firstName}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="w-full flex flex-col justify-start items-start">
              <p className="ml-7 font-body text-seagull-900 font-semibold text-xl">
                Last Name
              </p>
              <InputValueField
                type="text"
                placeHolder={". . ."}
                stateFunc={setLastName}
                stateValue={lastName}
              />
            </div>
          </Fade>
        </div>
        <div className="flex flex-row w-full gap-x-12">
          <Fade left>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <p className="ml-7 font-body text-seagull-900 font-semibold text-xl">
                Email
              </p>
              <InputValueField
                type="email"
                placeHolder={". . ."}
                stateFunc={setEmail}
                stateValue={email}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <p className="ml-7 font-body text-seagull-900 font-semibold text-xl">
                Subject
              </p>
              <InputValueField
                type="text"
                placeHolder={". . ."}
                stateFunc={setSubject}
                stateValue={subject}
              />
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <p className="ml-7 font-body text-seagull-900 font-semibold text-xl">
              Message
            </p>
            <TextAreaField
              type="text"
              placeHolder=". . ."
              stateValue={message}
              stateFunc={setMessage}
              rows={4}
              cols={50}
            />
          </div>

          <motion.button
            {...buttonClick}
            className="w-32 py-4 rounded-full bg-gradient-to-tr from-[#81e2f3] to-[#e2ecd9]
        flex items-center justify-center gap-3 shadow-lg hover:shadow-[#81e2f3]"
            onClick={() => send()}
          >
            <p className="font-body font-medium text-lg text-seagull-50">
              Send
            </p>
          </motion.button>
        </Fade>
      </div>
    </div>
  );
}

export const InputValueField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
  rows,
  cols,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full px-4 py-1 h-16 bg-gradient-to-l from-seagull-200 to-seagull-300
        shadow-lg outline-none rounded-full border-seagull-100 border 
        focus:border-seagull-200 focus:shadow-seagull-300 font-body font-semibold text-seagull-900"
      rows={rows}
      cols={cols}
      value={stateValue}
      onChange={(e) => stateFunc(e.target.value)}
    />
  );
};

export const TextAreaField = ({
  type,
  placeHolder,
  stateValue,
  stateFunc,
  rows,
  cols,
}) => {
  return (
    <textarea
      type={type}
      placeholder={placeHolder}
      className="w-full px-8 py-4 h-52 bg-gradient-to-l from-seagull-200 to-seagull-300
      shadow-lg outline-none rounded-[2rem] border-seagull-100 border 
      focus:border-seagull-200 focus:shadow-seagull-300 font-body font-semibold text-seagull-900"
      rows={rows}
      cols={cols}
      value={stateValue}
      onChange={(e) => stateFunc(e.target.value)}
    />
  );
};
