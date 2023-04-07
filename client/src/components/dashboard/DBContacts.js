import React from "react";
import ContactData from "../ContactData";
import { useSelector } from "react-redux";

export default function DBContacts() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="flex items-center justify-start flex-col pt-6 w-full h-full gap-4">
      {contacts?.length > 0 ? (
        <>
          {contacts.reverse().map((item, i) => (
            <ContactData key={i} index={i} data={item} />
          ))}
        </>
      ) : (
        <div className="flex w-full h-full items-center justify-center flex-col">
          <h1 className="text-[75px] font-body font-semibold text-seagull-900 drop-shadow-lg">
            No message received
          </h1>
        </div>
      )}
    </div>
  );
}
