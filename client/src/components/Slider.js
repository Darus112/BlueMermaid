import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";

import { FreeMode } from "swiper";

import "./styles/SwiperStyles.css";
import "swiper/css";
import "swiper/css/free-mode";

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
    <div className="w-full pt-12">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
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
