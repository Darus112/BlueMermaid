import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import DBLeftSection from "../components/dashboard/DBLeftSection";
import DBRightSection from "../components/dashboard/DBRightSection";
import { setAllProducts } from "../context/actions/productActions";

export default function Dashboard() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  });

  return (
    <div className="w-screen h-screen flex items-center">
      <DBLeftSection />
      <DBRightSection />
    </div>
  );
}
