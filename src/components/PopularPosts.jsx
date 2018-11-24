import React, { Component } from "react";

class PopularPosts extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-popular-post border-gradient-def mb-30">
        <div className="widget-title">
          <h4>Popular Post</h4>
        </div>
        <div className="widget-content">
          <div className="polupar-post-item mb-30">
            <img
              src="images/popular_01.jpg"
              className="mb-20"
              alt="popular-post"
            />
            <h6>
              <a href="blog-detail.html">
                Your Heart is just a Beatbox for Song of your Life.
              </a>
            </h6>
            <p className="mb-0">15 May, 2018 at 3:56pm</p>
          </div>
          <div className="polupar-post-item">
            <img
              src="images/popular_02.jpg"
              className="mb-20"
              alt="popular-post"
            />
            <h6>
              <a href="blog-detail.html">
                Travel brings Power and Love back to your life.
              </a>
            </h6>
            <p className="mb-0">30 May, 2018 at 5:56pm</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularPosts;
