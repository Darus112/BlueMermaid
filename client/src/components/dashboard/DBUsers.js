import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../../api";
import { setAllUserDetails } from "../../context/actions/allUsersActions";

import UserImg from "../../assets/Img/userImg.png";

import DataTable from "../DataTable";

export default function DBUsers() {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 pt-6 w-full mt-28">
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
