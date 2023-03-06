import React from "react";
import "./styles/Home.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import foodImg from "../assets/food-4.png"

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
    </>
    
    );
  }