import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import "./styles/SwiperStyles.css";
import SliderCard from "./SliderCard";

export default function Slider() {
  const products = useSelector((state) => state.products);
  const [specials, setSpecials] = useState(null);

  useEffect(() => {
    setSpecials(
      products?.filter((data) => data.product_category === "ourspecials")
    );
    console.log(specials);
  }, [products]);

  return (
    <div className="w-full pt-10">
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={40}
        grabCursor={true}
        className="mySwiper"
      >
        {specials &&
          specials.map((data, i) => (
            <SwiperSlide key={i}>
              <SliderCard key={i} data={data} index={1} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
