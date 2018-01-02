import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class RSVP extends Component {
  render() {
    return (
      <div className="rsvp-container">
        <Helmet title={`RSVP | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default RSVP;
