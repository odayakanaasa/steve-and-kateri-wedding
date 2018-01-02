import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class Directions extends Component {
  render() {
    return (
      <div className="directions-container">
        <Helmet title={`Directions | ${config.siteTitle}`} />
      </div>
    );
  }
}

export default Directions;
