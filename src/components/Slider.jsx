import React, { Component } from "react";

class Slider extends Component {
  state = {};
  render() {
    return (
      <section className="slider-section">
        <div className="home-main-slider owl-carousel owl-theme">
          <div className="item">
            <img src="images/banner_main_01.jpg" alt="slider" />
            <div className="slide-content">
              <div className="blog-content-cate">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-gradient-cate-reg">
                      LIFESTYLE
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="blog-title mb-20">
                <a href="blog-detail.html" className="text-white">
                  Reading is fabulous. Keep it ON
                </a>
              </h2>
              <p className="mb-0 blog-author">
                Written by : <strong>Jonathan</strong>
              </p>
            </div>
          </div>
          <div className="item">
            <img src="images/banner_main_02.jpg" alt="slider" />
            <div className="slide-content">
              <div className="blog-content-cate">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-gradient-cate-pri">
                      FASHION
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="blog-title mb-20">
                <a href="blog-detail.html" className="text-white">
                  The Joy of Dressing is an Art.
                </a>
              </h2>
              <p className="mb-0 blog-author">
                <span>
                  Written by : <strong>Lawerence</strong>
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <img src="images/banner_main_03.jpg" alt="slider" />
            <div className="slide-content">
              <div className="blog-content-cate">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-gradient-cate-info">
                      TRAVEL
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="blog-title mb-20">
                <a href="blog-detail.html" className="text-white">
                  Travelling make you Modest.
                </a>
              </h2>
              <p className="mb-0 blog-author">
                Written by : <strong>Clement</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
