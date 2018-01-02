import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class Registry extends Component {
  render() {
    return (
      <div className="registry-container">
        <Helmet title={`Registry | ${config.siteTitle}`} />
        <About />
      </div>
    );
  }
}

export default Registry;
