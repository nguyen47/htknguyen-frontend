import React, { Component } from "react";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-contact border-gradient-reg mb-30">
        <div className="widget-title">
          <h4>Contact Us</h4>
        </div>
        <div className="widget-content">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="mdi mdi-map" /> 123 Main Street
            </li>
            <li className="list-group-item">
              <i className="mdi mdi-phone" /> +1 9876543210
            </li>
            <li className="list-group-item">
              <i className="mdi mdi-email" /> info@mail.com
            </li>
            <li className="list-group-item">
              <i className="mdi mdi-web" /> www.blogen.com
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactUs;
