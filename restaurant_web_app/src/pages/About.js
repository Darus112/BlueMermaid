import React from "react";
import "./styles/About.css";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import aboutImg1 from "../assets/About/ourStoryImg.png"
import aboutImg2 from "../assets/About/ourGoals_img1.png"
import aboutImg3 from "../assets/About/ourGoals_img2.png"
import aboutImg4 from "../assets/About/ourGoals_img3.png"

export default function About() {
    return (
    <>
      <section id="ourStory">
        <div class="container2">
          <div class="ourStory_wrapper">
            <div class="ourStory_img">
            <Fade left>
            <img src={aboutImg1}/>
            </Fade>
            </div>
            <Fade right>
            <div class="ourStory_info">
              <h3 class="ourStory_title">
                Our Story
              </h3>
              <p class="ourStory_subtitle">
                It's all started since 1998
              </p>
              <p class="ourStory_text">
                Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering
                culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a
                dining
                experience to remember.<br></br>
                Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
                business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
                seating for up to 65 guests, we can cater for all occasions.
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </section>

      <section id="ourGoals">
        <Bounce>
        <div class="container2">
          <div class="ourGoals_info">
            <h3 class="ourGoals_title">
              Our Goals
            </h3>
            <p class="ourGoals_text">
              We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and
              seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth,
              graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our
              consumers with exceptional service. To have every customer who comes through our doors leave impressed by
              their experience at Shaif's Cuisine and excited to come back again.
            </p>
            </div>
          </div>
          </Bounce>
          <Fade bottom>
          <div class="container2">
          <div class="ourGoals_imgs_wrapper" >
            <div class="ourGoals_img1">
              <img src={aboutImg2}/>
            </div>
            <div class="ourGoals_img2">
              <img src={aboutImg3}/>
            </div>
            <div class="ourGoals_img3">
              <img src={aboutImg4}/>
            </div>
          </div>        
          </div>
          </Fade>
    </section>
    </>
    );
  }