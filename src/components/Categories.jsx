import React, { Component } from "react";

class Categories extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-category border-gradient-info mb-30">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <div className="widget-content">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="#">Lifestyle</a>
              <span className="badge badge-primary badge-pill">5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="#">Travelling</a>
              <span className="badge badge-primary badge-pill">10</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="#">Music</a>
              <span className="badge badge-primary badge-pill">15</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="#">Fashion</a>
              <span className="badge badge-primary badge-pill">23</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <a href="#">Photography</a>
              <span className="badge badge-primary badge-pill">55</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
