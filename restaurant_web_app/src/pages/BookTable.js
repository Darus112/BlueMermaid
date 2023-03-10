import React from "react";
import Bounce from 'react-reveal/Bounce';

export default function BookTable() {
    return (
    <>
    <section id="form">
      <Bounce>
        <div class="container2">
          <h3 class="form_title">Rezervare</h3>
          <div class="form_wrapper">
            <form name="booking" method="POST" netlify>
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
                <label for="tableType">Table Type</label>
                <select name="Table Type" id="tableType" required>
                  <option selected disabled>Choose</option>
                  <option value="small">Small(2 persons)</option>
                  <option value="medium">Small(4 persons)</option>
                  <option value="large">large(6 persons)</option>
                </select>
              </div>
              <div class="form_group">
                <label for="guestNumber">Guest Number</label>
                <input type="number" id="guestNumber" name="Guest Number" min="1" max="10" required/>
              </div>
              <div class="form_group">
                <label for="placement">Placement</label>
                <select name="Placement" id="placement">
                  <option selected disabled>Choose</option>
                  <option value="outdoor">Outdoor</option>
                  <option value="indoor">Indoor</option>
                  <option value="rooftop">rooftop</option>
                </select>
              </div>
              <div class="form_group">
                <label for="date">Date</label>
                <input type="date" id="date" name="Date" required/>
              </div>
              <div class="form_group">
                <label for="time">time</label>
                <input type="time" id="time" name="Time" required/>
              </div>
              <div class="form_group form_group_full">
                <label for="note">Note</label>
                <textarea name="Note" id="note" rows="4"></textarea>
              </div>
              <button type="submit" class="btn-bg">Book Table</button>
            </form>
          </div>
        </div>
      </Bounce>
    </section>
    </>
    );
  }