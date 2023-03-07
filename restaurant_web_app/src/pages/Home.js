import React from "react";
import "./styles/Home.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import foodImg from "../assets/Food/food-4.png"
import foodSpecial1 from "../assets/Food/food-1.png"
import foodSpecial2 from "../assets/Food/food-3.png"


export default function Home() {
    return (
    <>
      <section id="hero">
        <div class="container2">
          <div class="hero_wrapper">
            <div class="hero_left">
              <div class="hero_left_wrapper">
                <h1 class="hero_heading">The flavor of tradition</h1>
                <p class="hero_info">
                  We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
                  dining
                  environment.
                </p>
                <div class="button_wrapper">
                  <Link to="./menu" class="btn-bg">Explore Menu</Link>
                  <Link to="./booktable" className="btn-nobg">Book Table</Link>
                </div>
              </div>
            </div>
            <div class="hero_right">
              <div class="hero_imgWrapper">
              <div className="card"><img src={foodImg}/> </div>
              <div className="card"> <img src={foodImg}/></div>           
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="storeInfo">
        <div class="container2">
          <div class="storeInfo_wrapper">
            <div class="storeInfo_item">
              <div class="storeInfo_icon">
              <i class="fa-solid fa-clock"></i>
              </div>
              <h3 class="storeInfo_title">
                10 AM - 7 PM
              </h3>
              <p class="storeInfo_text">
                Opening Hour
              </p>
            </div>
            <div class="storeInfo_item">
              <div class="storeInfo_icon">
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <h3 class="storeInfo_title">
                GEC, Chittagong
              </h3>
              <p class="storeInfo_text">
                Address
              </p>
            </div>
            <div class="storeInfo_item">
              <div class="storeInfo_icon">
              <i class="fa-solid fa-phone-volume"></i>
              </div>
              <h3 class="storeInfo_title">
                +880123443
              </h3>
              <p class="storeInfo_text">
                Call Now
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="ourSpecials">
        <div class="container2">
          <div class="ourSpecials__wrapper">
            <div class="ourSpecials__left">
              <div class="ourSpecials__item">
                <div class="ourSpecials__item__img">
                <img src={foodSpecial2} height={200} width={250}/>
                </div>
                <h2 class="ourSpecials__item__title">
                  Sweet Potato Fries Bowl
                </h2>
                <h3 class="ourSpecials__item__price">
                  $18
                </h3>
                <p class="ourSpecials__item__text">
                  These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded
                  with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder,
                  garlic, and onion, these spicy sweet potato fries are full of flavor.
                </p>
              </div>
              <div class="ourSpecials__item">
                <div class="ourSpecials__item__img">
                  <img src={foodSpecial1} height={200} width={250}/>
                </div>
                <h2 class="ourSpecials__item__title">
                  Vegan Salad bowl
                </h2>
                <h3 class="ourSpecials__item__price">
                  $18
                </h3>
                <p class="ourSpecials__item__text">
                  Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or
                  cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion
                  of flavors and textures.
                </p>
              </div>
            </div>
            <div class="ourSpecials__right">
              <h2 class="ourSpecials__title">
                Our Specials
              </h2>
              <p class="ourSpecials__text">
                All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
                delivered to our customers
              </p>
              <Link to="./booktable" className="btn-bg">Book Table</Link>
            </div>
          </div>
        </div>
      </section>
      <section id="whyUs">
        <div class="container2">
          <div class="whyUs__wrapper">
            <div class="whyUs__left">
              <h2 class="whyUs__title">
                Why Choose Our Food
              </h2>
              <p class="whyUs__text">
                Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant.
                Shaif's Cuisine is one of the most exquisite fine-dinning restaurant in Chittagong cities with a captivating
                view of GEC Hills, perfect ambiance, and scrumptious food.
              </p>
            </div>
            <div class="whyUs__right">
              <div class="whyUs__items__wrapper">
                <div class="whyUs__item">
                  <div class="whyUs__item__icon">
                  <i class="fa-solid fa-utensils"></i>
                  </div>
                  <p class="whyUs__item__text">Quality Food</p>
                </div>
                <div class="whyUs__item">
                  <div class="whyUs__item__icon">
                  <i class="fa-solid fa-bowl-food"></i>
                  </div>
                  <p class="whyUs__item__text">Classical taste</p>
                </div>
                <div class="whyUs__item">
                  <div class="whyUs__item__icon">
                  <i class="fa-solid fa-kitchen-set"></i>
                  </div>
                  <p class="whyUs__item__text">Skilled chef</p>
                </div>
                <div class="whyUs__item">
                  <div class="whyUs__item__icon">
                  <i class="fa-solid fa-person-walking"></i>
                  </div>
                  <p class="whyUs__item__text">Best service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
    );
  }