import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bounce from "react-reveal/Bounce";
import { getAllOrders } from "../api";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { setOrders } from "../context/actions/ordersActions";

import NoUserOrders from "../assets/Img/no_user_orders.png";
import OrderData from "../components/OrderData";

export default function Orders() {
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const [userOrders, setUserOrders] = useState(null);

  useEffect(() => {
    if (!userOrders) {
      getAllOrders().then((data) => {
        dispatch(setOrders(data));
        setUserOrders(data.filter((item) => item.userId === user?.user_id));
      });
    } else {
      setUserOrders(orders.filter((data) => data.userId === user?.user_id));
    }
  }, [userOrders]);

  return (
    <>
      <main className="w-screen min-h-screen flex items-center flex-col">
        <Navbar />
        <Bounce>
          <div
            className="w-full flex flex-col items-center justify-center mt-40
      px-6 md:px-24 2xl:px-96"
          >
            <div className="flex items-center justify-center flex-col pt-6 w-full gap-4">
              {userOrders?.length > 0 ? (
                <>
                  {userOrders.map((item, i) => (
                    <OrderData key={i} index={i} data={item} admin={false} />
                  ))}
                </>
              ) : (
                <div className="flex items-center justify-center flex-col w-full h-full">
                  <img src={NoUserOrders} className=" drop-shadow-lg" />
                  <p className="text-3xl font-body text-[#ff7f66] font-medium drop-shadow-lg">
                    You have placed no orders.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Bounce>
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </main>
    </>
  );
}
