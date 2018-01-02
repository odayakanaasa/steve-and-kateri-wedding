import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
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
import venue from "../images/venue.svg";
import directions from "../images/directions.svg";
import hotel from "../images/hotel.svg";
import rsvp from "../images/rsvp.svg";
import story from "../images/story.svg";
import registry from "../images/registry.svg";
import "../css/home.css";

class Index extends Component {

  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="home-container">
        <Helmet title={config.siteTitle} />
        <div className="home-landing">
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
          <ul className="tiles">
            <li>
              <Link to="/venue">
                <h2>Venue</h2>
                <img src={venue} />
              </Link>
            </li>
            <li>
              <Link to="/directions">
                <h2>Directions</h2>
                <img src={directions} />
              </Link>
            </li>
            <li>
              <Link to="/hotel">
                <h2>Hotel</h2>
                <img src={hotel} />
              </Link>
            </li>
            <li>
              <Link to="/rsvp">
                <h2>RSVP</h2>
                <img src={rsvp} />
              </Link>
            </li>
            <li>
              <Link to="/our-story">
                <h2>Our Story</h2>
                <img src={story} />
              </Link>
            </li>
            <li>
              <Link to="/registry">
                <h2>Registry</h2>
                <img src={registry} />
              </Link>
            </li>
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
