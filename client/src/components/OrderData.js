import React from "react";
import { motion } from "framer-motion";
import { buttonClick, staggerFadeInOut } from "../animation";

export default function OrderData({ index, data, admin }) {
  const handleClick = (orderId, sts) => {};

  return (
    <motion.div
      {...staggerFadeInOut(index)}
      className="w-[95%] flex flex-col items-start justify-start px-3 py-2 border relative border-seagull-100
  bg-seagull-50 drop-shadow-lg rounded-lg gap-4"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg text-[#002849] font-semibold font-body">
          Orders
        </h1>

        <div className="flex items-center gap-4">
          <p
            className="font-body text-base font-medium
           text-seagull-900 flex gap-1"
          >
            Total:{" "}
            <div className="flex items-center justify-center gap-2">
              <span className="font-food">{data?.total}</span>
              <div className="rounded-full w-6 flex items-center justify-center h-6 bg-seagull-100 shadow-md">
                <span className=" text-[8px] font-body font-medium text-[#ebdd64] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  RON
                </span>
              </div>
            </div>
          </p>

          <p className="font-body text-[10px] font-semibold px-2 py-[2px] capitalize rounded-md bg-[#77e79c] drop-shadow-lg ">
            {data?.status}
          </p>

          <p
            className={`text-[11px] font-body font-semibold capitalize border border-[#d4d4d4] px-2 py-[2px] rounded-md shadow-lg
            ${
              (data.sts === "preparing" &&
                "text-[#f7a64a] bg-[#f7a64a] bg-opacity-10") ||
              (data.sts === "cancelled" &&
                "text-[#ee5050] bg-[#ee5050] bg-opacity-10") ||
              (data.sts === "delivered" &&
                "text-[#66d48b] bg-[#66d48b] bg-opacity-10")
            }`}
          >
            {data?.sts}
          </p>

          {admin && (
            <div className="flex items-center justify-center gap-2">
              <p className="text-[11px] font-body font-semibold capitalize">
                mark as:
              </p>

              <motion.p
                {...buttonClick}
                onClick={() => handleClick(data.orderId, "preparing")}
                className="text-[11px] font-body font-semibold capitalize border border-[#d4d4d4] px-2 py-[2px] rounded-md shadow-lg text-[#f7a64a] bg-[#f7a64a] bg-opacity-5 cursor-pointer"
              >
                preparing
              </motion.p>

              <motion.p
                {...buttonClick}
                onClick={() => handleClick(data.orderId, "preparing")}
                className="text-[11px] font-body font-semibold capitalize border border-[#d4d4d4] px-2 py-[2px] rounded-md shadow-lg text-[#ee5050] bg-[#ee5050] bg-opacity-5 cursor-pointer"
              >
                cancelled
              </motion.p>

              <motion.p
                {...buttonClick}
                onClick={() => handleClick(data.orderId, "preparing")}
                className="text-[11px] font-body font-semibold capitalize border border-[#d4d4d4] px-2 py-[2px] rounded-md shadow-lg text-[#66d48b] bg-[#66d48b] bg-opacity-5 cursor-pointer"
              >
                delivered
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start flex-wrap w-full">
        <div className="flex items-center justify-center gap-4">
          {data?.items &&
            data.items.map((item, j) => (
              <motion.div
                {...staggerFadeInOut(j)}
                key={j}
                className="flex items-center justify-center gap-1"
              >
                <img
                  src={item.imageURL}
                  className="w-10 object-contain rounded-md drop-shadow-lg"
                  alt=""
                />

                <div className="flex items-start flex-col">
                  <p className="text-[13px] font-body font-semibold text-[#002849]">
                    {item.product_name}
                  </p>
                  <div className="flex items-start gap-2">
                    <p className="font-body text-[9px] font-medium text-[#7a7a7a]">
                      {" "}
                      Qty : {item.quantity}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[10px]">
                      <span className=" text-[8px] font-body font-medium text-[#ebdd64] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        RON
                      </span>
                      <span className="font-food">{item.product_price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex items-start justify-start flex-col gap-2 px-6 ml-auto w-full md:w-460">
          <h1 className="font-body font-semibold text-[13px]">
            {data.shipping_details.name}
          </h1>

          <p className="font-body text-[#666565] text-[12px] font-medium -mt-2">
            Email: {data.customer.email} | Phone: {data.customer.phone}
          </p>
          <p className="font-body text-[#666565] text-[12px] font-medium -mt-2">
            Address1: {data.shipping_details.address.line1}
          </p>
          <p className="font-body text-[#666565] text-[12px] font-medium -mt-2">
            Address2: {data.shipping_details.address.line2}
          </p>
          <p className="font-body text-[#666565] text-[12px] font-medium -mt-2">
            City: {data.shipping_details.address.city}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
