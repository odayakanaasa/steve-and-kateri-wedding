import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class OurStory extends Component {
  render() {
    return (
      <div className="our-story-container">
        <Helmet title={`Our Story | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default OurStory;
