import React from "react";
import "./styles/Global.css";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Contact() {
    return (
    <>
    <section id="storeInfo" >
      <Bounce>
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
        </Bounce>
    </section>

    <section id="form" className="pb-20">
      <Fade bottom>
        <div class="container2">
          <h3 class="form_title">Contact</h3>
          <div class="form_wrapper">
            <form name="contact" method="POST" netlify>
              <div class="form_group">
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" name="First Name" required/>
              </div>
              <div class="form_group">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" name="Last Name" required/>
              </div>
              <div class="form_group">
                <label for="email">Email</label>
                <input type="email" id="email" name="Email" required/>
              </div>
              <div class="form_group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="Subject" required/>
              </div>
              <div class="form_group form_group_full">
                <label for="message">Message</label>
                <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
              </div>
              <button type="submit" className="btn-bg">Send</button>
            </form>
          </div>
        </div>
      </Fade>
    </section>
    </>
    );
  }