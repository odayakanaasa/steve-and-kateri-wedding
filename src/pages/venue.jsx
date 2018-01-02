import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class Venue extends Component {
  render() {
    return (
      <div className="venue-container">
        <Helmet title={`Venue | ${config.siteTitle}`} />
      </div>
    );
  }
}

export default Venue;
