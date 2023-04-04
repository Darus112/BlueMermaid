import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NoOrders from "../../assets/Img/no_orders.png";
import OrderData from "../OrderData";

import { BiShowAlt } from "react-icons/bi";

export default function DBOrders() {
  const isOrder = useSelector((state) => state.isOrder);
  const orders = useSelector((state) => state.orders);

  return (
    <div className="flex items-center justify-start flex-col pt-6 w-full h-full gap-4">
      {orders?.length > 0 ? (
        <>
          {orders.reverse().map((item, i) => (
            <OrderData
              key={i}
              index={orders.length - (i + 1)}
              data={item}
              admin={true}
            />
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
