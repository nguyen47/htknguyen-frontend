import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo">
                <img
                  src="images/logo_small.png"
                  className="img img-responsive"
                  alt="logo"
                />
              </div>
              <div className="footer-social">
                <ul className="list-inline social mb-0">
                  <li className="list-inline-item">
                    <a href="#" className="social-icon">
                      <i className="mdi mdi-facebook" /> Facebook
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-icon">
                      <i className="mdi mdi-twitter" /> Twitter
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-icon">
                      <i className="mdi mdi-instagram" /> Instagram
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-icon">
                      <i className="mdi mdi-google-plus" /> Google +
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-icon">
                      <i className="mdi mdi-linkedin" /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-copyright">
                <p className="copy-rights mb-0">
                  © 2018 Blogen. Designed by xPanther Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
