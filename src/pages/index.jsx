import React, { Component } from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

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
        </div>
        <div className="home-details">
          <h1>Details</h1>
          <ul>
            <li>Where: Schaar's Bluff Gathering Center</li>
            <li>Huh: Hastings, MN</li>
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
