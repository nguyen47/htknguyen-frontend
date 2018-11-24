import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-search border-gradient-def mb-30">
        <div className="widget-title">
          <h4>Search</h4>
        </div>
        <div className="widget-content">
          <form
            method="get"
            id="widgetsearchform"
            className="widgetsearchform"
            action="#"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="widgetSearch"
                id="widgetSearch"
                placeholder="Type Here..."
                aria-label="Type here"
              />
              <div className="input-group-append">
                <button
                  className="search-btn"
                  type="submit"
                  form="widgetsearchform"
                >
                  <i className="mdi mdi-magnify" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
