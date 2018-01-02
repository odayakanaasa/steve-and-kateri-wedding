import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class Hotel extends Component {
  render() {
    return (
      <div className="hotel-container">
        <Helmet title={`Hotel | ${config.siteTitle}`} />
      </div>
    );
  }
}

export default Hotel;
