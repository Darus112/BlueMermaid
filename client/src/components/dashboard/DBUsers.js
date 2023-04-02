import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import UserImg from "../../assets/Img/userImg.png";

import DataTable from "../DataTable";

export default function DBUsers() {
  const allUsers = useSelector((state) => state.allUsers);

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full mt-12">
      <DataTable
        columns={[
          {
            title: "Image",
            field: "photoURL",
            render: (rowData) => (
              <img
                src={rowData.photoURL ? rowData.photoURL : UserImg}
                className="w-16 h-16 object-contain rounded-full shadow-lg"
              />
            ),
          },
          {
            title: "Name",
            field: "displayName",
            render: (rowData) => (
              <p className="font-body font-bold">{rowData.displayName}</p>
            ),
          },
          {
            title: "Email",
            field: "email",
            render: (rowData) => (
              <p className="font-body font-semibold text-seagull-300">
                {rowData.email}
              </p>
            ),
          },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p
                className={`px-2 py-1 w-32 text-center text-seagull-50 rounded-lg font-body shadow-lg
          ${rowData.emailVerified ? "bg-[#6acc6a]" : "bg-[#d44646]"}`}
              >
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },
        ]}
        data={allUsers}
        title="List of Users"
      />
    </div>
  );
}
