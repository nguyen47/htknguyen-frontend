import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div id="menu-content" className="menu-overlay">
        <a href="javascript:void(0)" id="menu-close-btn" className="close-btn">
          <i className="mdi mdi-close" />
        </a>
        <div className="menu-overlay-content">
          <div className="container">
            <div id="fullwidthmenu">
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="menu">
                  <li className="menu-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="about.html">About</a>
                  </li>
                  <li className="menu-item current-menu-item menu-item-has-children">
                    <a href="blog.html">Blog</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="blog.html">Right Sidebar</a>
                      </li>
                      <li className="menu-item">
                        <a href="blog-left-sidebar.html">Left Sidebar</a>
                      </li>
                      <li className="menu-item">
                        <a href="blog-fullwidth.html">Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li className="menu-item">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
