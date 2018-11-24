import React, { Component } from "react";

class SidebarSearch extends Component {
  state = {};
  render() {
    return (
      <div id="search-content" className="search-overlay">
        <a
          href="javascript:void(0)"
          id="search-close-btn"
          className="close-btn"
        >
          <i className="mdi mdi-close" />
        </a>
        <div className="search-overlay-content">
          <div className="container">
            <form
              method="get"
              id="headsearchform"
              className="headsearchform"
              action="#"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="headerSearch"
                  id="headerSearch"
                  placeholder="Type and hit enter....."
                  aria-label="Type and hit enter"
                />
                <div className="input-group-append">
                  <button
                    className="search-btn"
                    type="submit"
                    form="headsearchform"
                  >
                    <i className="mdi mdi-magnify" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarSearch;
