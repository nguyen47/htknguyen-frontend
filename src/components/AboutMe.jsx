import React, { Component } from "react";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="widget widget-about border-gradient-info mb-30">
        <div className="widget-title">
          <h4>About Me</h4>
        </div>
        <div className="widget-content text-center">
          <img src="images/mia.png" alt="about" />
          <div className="about-content">
            <a
              href="about.html"
              className="btn about-name btn-gradient-cate-info"
            >
              MIA PARKER
            </a>
            <p className="mb-0">
              Quisque nec accumsan justo. Maecenas auctor in nulla nec
              tincidunt. Pellentesque rutrum molestie tortor, ut egestas risus
              commodo a.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
