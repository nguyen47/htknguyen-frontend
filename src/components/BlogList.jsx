import React, { Component } from "react";

class BlogList extends Component {
  state = {};
  render() {
    return (
      <div className="blog-list-box border-gradient-info mb-30">
        <div className="blog-head">
          <img src="images/blog_01.jpg" alt="blog-featured-img" />
        </div>
        <div className="blog-content">
          <div className="blog-content-head">
            <div className="row">
              <div className="col-sm-7">
                <div className="blog-content-cate">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="btn-gradient-cate-info">
                        PHOTOGRAPHY
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="blog-content-date">
                  <p>15 May, 2018 at 3:56pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-content-body">
            <h2 className="blog-title mb-20">
              <a href="blog-detail.html">
                Explore within. Enjoy cool breeze with calm mind and atmosphere.
              </a>
            </h2>
            <p className="blog-desc mb-30">
              Quisque nec accumsan justo. Maecenas auctor in nulla nec
              tincidunt. Pellentesque rutrum molestie tortor, ut egestas risus
              commodo a. Praesent a orci nec libero fringilla euismod eu id
              massa. Nunc eget bibendum odio, sed sodales eros.Vivamus lacinia,
              mi eu ultrices mattis.{" "}
            </p>
          </div>
          <div className="blog-content-footer">
            <div className="row">
              <div className="col-sm-5">
                <div className="blog-content-read-more">
                  <a href="blog-detail.html">Read More...</a>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="blog-content-social">
                  <ul className="list-inline social mb-0">
                    <li className="list-inline-item">
                      <a href="#" className="social-icon text-dim">
                        <i className="mdi mdi-facebook" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-icon text-dim">
                        <i className="mdi mdi-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-icon text-dim">
                        <i className="mdi mdi-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-icon text-dim">
                        <i className="mdi mdi-google-plus" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="social-icon text-dim">
                        <i className="mdi mdi-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-footer">
          <div className="row">
            <div className="col-sm-4">
              <p className="mb-0 blog-author">
                <span className="text-dim">
                  <i className="mdi mdi-account" /> Author :{" "}
                </span>
                John
              </p>
            </div>
            <div className="col-sm-4">
              <p className="mb-0 blog-views">
                <span className="text-dim">
                  <i className="mdi mdi-eye" /> Views :{" "}
                </span>
                1035
              </p>
            </div>
            <div className="col-sm-4">
              <p className="mb-0 blog-comment">
                <span className="text-dim">
                  <i className="mdi mdi-comment-processing" /> Comments :{" "}
                </span>
                27
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
