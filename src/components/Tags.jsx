import React, { Component } from "react";

class Tags extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-tags border-gradient-pri mb-30">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="widget-content">
          <ul className="list-inline tags mb-0 mt-15">
            <li className="list-inline-item">
              <a href="#">Business</a>
            </li>
            <li className="list-inline-item">
              <a href="#">News</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Agency</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Corporate</a>
            </li>
            <li className="list-inline-item">
              <a href="#">E-Commerce</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tags;
