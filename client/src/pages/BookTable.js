import React from "react";
import Bounce from "react-reveal/Bounce";

export default function BookTable() {
  return (
    <>
      <section id="form">
        <Bounce>
          <div className="container2">
            <h3 className="form_title">Rezervare</h3>
            <div className="form_wrapper mr-14">
              <form name="booking" method="POST" netlify="true">
                <div className="form_group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="First Name"
                    required
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="Last Name" required />
                </div>
                <div className="form_group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="Email" required />
                </div>
                <div className="form_group">
                  <label htmlFor="tableType">Table Type</label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="Table Type"
                    id="tableType"
                    required
                  >
                    <option value="DEFAULT" disabled>
                      Choose
                    </option>
                    <option value="small">Small(2 persons)</option>
                    <option value="medium">Small(4 persons)</option>
                    <option value="large">large(6 persons)</option>
                  </select>
                </div>
                <div className="form_group">
                  <label htmlFor="guestNumber">Guest Number</label>
                  <input
                    type="number"
                    id="guestNumber"
                    name="Guest Number"
                    min="1"
                    max="10"
                    required
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="placement">Placement</label>
                  <select
                    defaultValue={"DEFAULT"}
                    name="Placement"
                    id="placement"
                  >
                    <option value="DEFAULT" disabled>
                      Choose
                    </option>
                    <option value="outdoor">Outdoor</option>
                    <option value="indoor">Indoor</option>
                    <option value="rooftop">rooftop</option>
                  </select>
                </div>
                <div className="form_group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="Date" required />
                </div>
                <div className="form_group">
                  <label htmlFor="time">time</label>
                  <input type="time" id="time" name="Time" required />
                </div>
                <div className="form_group form_group_full">
                  <label htmlFor="note">Note</label>
                  <textarea name="Note" id="note" rows="4"></textarea>
                </div>
                <button type="submit" className="btn-bg">
                  Book Table
                </button>
              </form>
            </div>
          </div>
        </Bounce>
      </section>
    </>
  );
}
