import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../api";
import { setOrders } from "../../context/actions/ordersActions";
import NoOrders from "../../assets/Img/no_orders.png";
import OrderData from "../OrderData";

export default function DBOrders() {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full gap-4">
      {orders?.lenght > 0 ? (
        <>
          {orders.map((item, i) => (
            <OrderData key={i} index={i} data={item} admin={true} />
          ))}
        </>
      ) : (
        <div className="flex w-full h-full items-center justify-center flex-col">
          <img src={NoOrders} className=" drop-shadow-lg" />
          <h1 className="text-[75px] font-body font-semibold text-seagull-900 drop-shadow-lg">
            No Orders
          </h1>
        </div>
      )}
    </div>
  );
}
