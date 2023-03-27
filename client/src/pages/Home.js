import React from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

import foodImg from "../assets/Food/food-4.png";
import OurSpecialBg from "../assets/Img/Hero_bg.png";

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

      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-40">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-start justify-start w-52">
            <p className=" font-content text-[40px] md:text-[60px] font-semibold tracking-wide">
              Our Specials
            </p>
            <p className=" font-content text-[20px] md:text-[30px]">
              All of our food is prepared daily at our restaurants to ensure the
              highest quality, freshest meals are delivered to our customers
            </p>
            <Link to="./booktable" className="btn-bg mt-3">
              Book Table
            </Link>
          </div>
        </div>
        <div className="py-2 flex-1 flex items-center justify-center relative">
          <img
            className="absolute -top-12 w-full h-420
           md:w-auto md:h-650 rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            src={OurSpecialBg}
            alt=""
          />
          <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14"></div>
        </div>
      </section>

      <section></section>

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
