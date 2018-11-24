import React, { Component } from "react";

class FollowUs extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-follows border-gradient-pri mb-30">
        <div className="widget-title">
          <h4>Follow Us</h4>
        </div>
        <div className="widget-content">
          <ul className="list-inline social mt-20 mb-0">
            <li className="list-inline-item">
              <a href="#" className="social-icon">
                <i className="mdi mdi-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon">
                <i className="mdi mdi-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon">
                <i className="mdi mdi-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon">
                <i className="mdi mdi-google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-icon">
                <i className="mdi mdi-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FollowUs;
