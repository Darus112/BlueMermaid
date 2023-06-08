import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoOrders from "../../assets/Img/no_orders.png";
import OrderData from "../OrderData";
import { getAllOrders } from "../../api";
import { setOrders } from "../../context/actions/ordersActions";

export default function DBOrders() {
  const orders = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!order) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
        setOrder(order);
      });
    }
  }, [order]);

  return (
    <div
      className="flex items-center justify-start flex-col pt-20 w-full h-full gap-4 mt-11
    backdrop-blur-sm bg-seagull-800 bg-opacity-25 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-11 rounded-xl"
    >
      {orders?.length > 0 ? (
        <>
          {orders.reverse().map((item, i) => (
            <OrderData key={i} index={i} data={item} admin={true} />
          ))}
        </>
      ) : (
        <div className="flex w-full h-full items-center justify-center flex-col">
          <img src={NoOrders} className=" drop-shadow-lg" />
          <h1 className="text-[75px] font-body font-semibold text-seagull-900 drop-shadow-lg">
            Fără comenzi
          </h1>
        </div>
      )}
    </div>
  );
}
