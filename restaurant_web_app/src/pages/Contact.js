import React from "react";
import "./styles/Global.css";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Contact() {
    return (
    <>
    <section id="storeInfo" >
      <Bounce>
        <div className="container2">
          <div className="storeInfo_wrapper">
            <div className="storeInfo_item">
              <div className="storeInfo_icon">
              <i className="fa-solid fa-clock"></i>
              </div>
              <h3 className="storeInfo_title">
                10 AM - 7 PM
              </h3>
              <p className="storeInfo_text">
                Opening Hour
              </p>
            </div>
            <div className="storeInfo_item">
              <div className="storeInfo_icon">
              <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="storeInfo_title">
                GEC, Chittagong
              </h3>
              <p className="storeInfo_text">
                Address
              </p>
            </div>
            <div className="storeInfo_item">
              <div className="storeInfo_icon">
              <i className="fa-solid fa-phone-volume"></i>
              </div>
              <h3 className="storeInfo_title">
                +880123443
              </h3>
              <p className="storeInfo_text">
                Call Now
              </p>
            </div>
          </div>
        </div>
        </Bounce>
    </section>

    <section id="form" className="pb-20">
      <Fade bottom>
        <div className="container2">
          <h3 className="form_title">Contact</h3>
          <div className="form_wrapper">
            <form name="contact" method="POST" netlify="true">
              <div className="form_group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="First Name" required/>
              </div>
              <div className="form_group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="Last Name" required/>
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="Email" required/>
              </div>
              <div className="form_group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="Subject" required/>
              </div>
              <div className="form_group form_group_full">
                <label htmlFor="message">Message</label>
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