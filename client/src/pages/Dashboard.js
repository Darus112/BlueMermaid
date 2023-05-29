import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllContacts,
  getAllOrders,
  getAllProducts,
  getAllUsers,
} from "../api";
import DBLeftSection from "../components/dashboard/DBLeftSection";
import DBRightSection from "../components/dashboard/DBRightSection";
import { setAllProducts } from "../context/actions/productActions";
import { setAllContacts } from "../context/actions/contactActions";
import { setAllUserDetails } from "../context/actions/allUsersActions";
import { setOrders } from "../context/actions/ordersActions";

export default function Dashboard() {
  const products = useSelector((state) => state.products);
  const allUsers = useSelector((state) => state.allUsers);
  const orders = useSelector((state) => state.orders);
  const contacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, [products]);

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, [allUsers]);

  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, [orders]);

  useEffect(() => {
    if (!contacts) {
      getAllContacts().then((data) => {
        dispatch(setAllContacts(data));
      });
    }
  }, [contacts]);

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="db:flex hidden h-screen ">
        <DBLeftSection />
      </div>
      <DBRightSection />
    </div>
  );
}
