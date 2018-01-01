import React, { Component } from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import tree1 from "../images/tree1.svg";
import tree2 from "../images/tree2.svg";
import tree3 from "../images/tree3.svg";
import tree4 from "../images/tree4.svg";
import tree5 from "../images/tree5.svg";
import tree6 from "../images/tree6.svg";
import tree7 from "../images/tree7.svg";

class Index extends Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="home-container">
        <Helmet title={config.siteTitle} />
        <div className="half-height-container home-landing">
          <div className="home-landing-text">
            <h1>Steve & Kateri's Wedding</h1>
            <h2>July 21, 2018</h2>
            <h2>Hastings, MN</h2>
          </div>

          <div className="trees">
            <div className="trees-left">
              <img src={tree2} />
              <img src={tree6} />
              <img src={tree4} />
            </div>

            <div className="trees-right">
              <img src={tree5} />
              <img src={tree1} />
              <img src={tree7} />
            </div>
          </div>
        </div>
        <div className="home-details">
          <h1>Details</h1>
          <ul>
            <li>Where: Schaar's Bluff Gathering Center</li>
            <li>When: July 21, 2018</li>
            <li>Accommodations: Info on Feb 1</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

// <SEO postEdges={postEdges} />
// <PostListing postEdges={postEdges} />
