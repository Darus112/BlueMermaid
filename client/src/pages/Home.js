import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";
import foodImg from "../assets/Food/food-4.png";
import foodSpecial1 from "../assets/Food/food-1.png";
import foodSpecial2 from "../assets/Food/food-3.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container2">
          <div className="hero_wrapper">
            <Fade left>
              <div className="hero_left">
                <div className="hero_left_wrapper">
                  <h1 className="hero_heading">The flavor of tradition</h1>
                  <p className="hero_info">
                    We are a multi-cuisine restaurant offering a wide variety of
                    food experience in both casual and fine dining environment.
                  </p>
                  <div className="button_wrapper">
                    <Link to="./menu" className="btn-bg">
                      Explore Menu
                    </Link>
                    <Link to="./booktable" className="btn-nobg">
                      Book Table
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="hero_right">
                <div className="hero_imgWrapper">
                  <div className="card">
                    <img src={foodImg} />{" "}
                  </div>
                  <div className="card">
                    {" "}
                    <img src={foodImg} />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section id="storeInfo">
        <Bounce>
          <div className="">
            <div className="storeInfo_wrapper">
              <div className="storeInfo_item">
                <div className="storeInfo_icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <h3 className="storeInfo_title">10 AM - 7 PM</h3>
                <p className="storeInfo_text">Opening Hour</p>
              </div>
              <div className="storeInfo_item">
                <div className="storeInfo_icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h3 className="storeInfo_title">GEC, Chittagong</h3>
                <p className="storeInfo_text">Address</p>
              </div>
              <div className="storeInfo_item">
                <div className="storeInfo_icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <h3 className="storeInfo_title">+880123443</h3>
                <p className="storeInfo_text">Call Now</p>
              </div>
            </div>
          </div>
        </Bounce>
      </section>

      <section id="ourSpecials">
        <Fade bottom>
          <div className="flex justify-center items-center mx-64">
            <div className="ourSpecials__wrapper">
              <div className="ourSpecials__left">
                <div className="ourSpecials__item">
                  <div className="ourSpecials__item__img">
                    <img src={foodSpecial2} height={200} width={250} />
                  </div>
                  <h2 className="ourSpecials__item__title">
                    Sweet Potato Fries Bowl
                  </h2>
                  <h3 className="ourSpecials__item__price">$18</h3>
                  <p className="ourSpecials__item__text">
                    These Sweet Potato Fries bowl are a glorious, messy plate of
                    goodness. Crispy sweet potato fries loaded with lots of
                    fresh summer vegetables and a lime ranch. By adding a
                    seasoning blend with chipotle powder, garlic, and onion,
                    these spicy sweet potato fries are full of flavor.
                  </p>
                </div>
                <div className="ourSpecials__item">
                  <div className="ourSpecials__item__img">
                    <img src={foodSpecial1} height={200} width={250} />
                  </div>
                  <h2 className="ourSpecials__item__title">Vegan Salad bowl</h2>
                  <h3 className="ourSpecials__item__price">$18</h3>
                  <p className="ourSpecials__item__text">
                    Vegan salad bowl are immensely satisfying with any
                    combination of whole grains, pulses, noodles, raw or cooked
                    fruits, and veggies all topped off with a delicious sauce or
                    dressing – each bite is an explosion of flavors and
                    textures.
                  </p>
                </div>
              </div>
              <div className="ourSpecials__right">
                <h2 className="ourSpecials__title">Our Specials</h2>
                <p className="ourSpecials__text">
                  All of our food is prepared daily at our restaurants to ensure
                  the highest quality, freshest meals are delivered to our
                  customers
                </p>
                <Link to="./booktable" className="btn-bg">
                  Book Table
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className="my-32 text-left">
        <Fade bottom>
          <div className="">
            <h2 className="topdishes_title text-4xl">Top dishes</h2>
            <div className="gap-8 grid lg:grid-cols-2 md:grid-cols-1"></div>
          </div>
        </Fade>
      </section>

      <section id="whyUs">
        <div className="container2">
          <div className="whyUs_wrapper">
            <Fade left>
              <div>
                <div className="whyUs_left">
                  <h2 className="whyUs_title">Why Choose Our Food</h2>
                  <p className="whyUs_text">
                    Quality of Service, Food, Ambiance, and Value of Money are
                    the primary elements for choosing a restaurant. Shaif's
                    Cuisine is one of the most exquisite fine-dinning restaurant
                    in Chittagong cities with a captivating view of GEC Hills,
                    perfect ambiance, and scrumptious food.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="whyUs_right">
                <div className="whyUs_items_wrapper">
                  <div className="whyUs_item">
                    <div className="whyUs_item_icon">
                      <i className="fa-solid fa-utensils"></i>
                    </div>
                    <p className="whyUs_item_text">Quality Food</p>
                  </div>
                  <div className="whyUs_item">
                    <div className="whyUs_item_icon">
                      <i className="fa-solid fa-bowl-food"></i>
                    </div>
                    <p className="whyUs_item_text">Classical taste</p>
                  </div>
                  <div className="whyUs_item">
                    <div className="whyUs_item_icon">
                      <i className="fa-solid fa-kitchen-set"></i>
                    </div>
                    <p className="whyUs_item_text">Skilled chef</p>
                  </div>
                  <div className="whyUs_item">
                    <div className="whyUs_item_icon">
                      <i className="fa-solid fa-person-walking"></i>
                    </div>
                    <p className="whyUs_item_text">Best service</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
