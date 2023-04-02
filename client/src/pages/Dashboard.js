import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getAllProducts, getAllUsers } from "../api";
import DBLeftSection from "../components/dashboard/DBLeftSection";
import DBRightSection from "../components/dashboard/DBRightSection";
import { setAllProducts } from "../context/actions/productActions";
import { setAllUserDetails } from "../context/actions/allUsersActions";
import { setOrders } from "../context/actions/ordersActions";

export default function Dashboard() {
  const products = useSelector((state) => state.products);
  const allUsers = useSelector((state) => state.allUsers);
  const orders = useSelector((state) => state.orders);

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

  return (
    <div className="w-screen h-screen flex items-center">
      <DBLeftSection />
      <DBRightSection />
    </div>
  );
}
