import React from "react";
import "./styles/Home.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import foodImg from "../assets/food-4.png"

export default function Home() {
    return (
    <>
      <section id="hero">
        <div class="container">
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
    </>
    
    );
  }