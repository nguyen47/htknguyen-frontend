import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="topbar-left">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        href="mailto:xpanthersolutions@gmail.com"
                        className="contact-list-item text-dim"
                      >
                        <i className="mdi mdi-email" />
                        xpanthersolutions@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="topbar-right">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a
                        href="tel:+19876543210"
                        className="contact-list-item text-dim"
                      >
                        <i className="mdi mdi-phone" />
                        +1 9876543210
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerbar">
          <div className="container">
            <div className="row">
              <div className="col-3 col-md-3">
                <div className="menubar">
                  <a id="menu-open-btn" className="btn-header">
                    <i className="mdi mdi-menu" />
                  </a>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="logobar text-center">
                  <a href="index.html">
                    <img
                      src="images/logo_small.png"
                      className="img img-responsive"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-3 col-md-3">
                <div className="searchbar text-right">
                  <a id="search-open-btn" className="btn-header">
                    <i className="mdi mdi-magnify" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
