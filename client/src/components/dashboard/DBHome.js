import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllUsers } from "../../api";
import { setAllProducts } from "../../context/actions/productActions";

import { CChart } from "@coreui/react-chartjs";
import { setAllUserDetails } from "../../context/actions/allUsersActions";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function DBHome() {
  const products = useSelector((state) => state.products);
  const allUsers = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();

  const ourspecials = products?.filter(
    (item) => item.product_category === "ourspecials"
  );
  const breakfast = products?.filter(
    (item) => item.product_category === "breakfast"
  );
  const launch = products?.filter((item) => item.product_category === "launch");
  const dinner = products?.filter((item) => item.product_category === "dinner");

  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data));
      });
    }
  }, []);

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <Fade bottom>
          <div className="flex items-center justify-center">
            <div className=" w-340 md:w-508 bg-seagull-100 p-12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CChart
                type="bar"
                data={{
                  labels: ["Our Specials", "Breakfast", "Launch", "Dinner"],
                  datasets: [
                    {
                      label: "Category products",
                      backgroundColor: "#34c4d1",
                      data: [
                        ourspecials?.length,
                        breakfast?.length,
                        launch?.length,
                        dinner?.length,
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </Fade>
        <Bounce>
          <div className="w-full h-full flex items-center justify-center">
            <div className=" w-275 md:w-460 bg-seagull-100 p-12 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CChart
                type="doughnut"
                data={{
                  labels: [
                    "Orders",
                    "Delivered",
                    "Cancelled",
                    "Paid",
                    "Not Paid",
                  ],
                  datasets: [
                    {
                      backgroundColor: [
                        "#d1af34",
                        "#68d134",
                        "#d13456",
                        "#34d1c1",
                        "#ac34d1",
                      ],
                      data: [40, 20, 80, 10, 12],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
