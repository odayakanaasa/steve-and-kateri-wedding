import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="navigation">
          <Link to="/"><img src="/icons/home.svg" /></Link>
        </div>
        <div className="post-container">
          <img src={post.icon} className="icon-top-right" />
          <h1>
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          {/* Post Meta */}
          {/* 
            <div className="post-meta">
              <PostTags tags={post.tags} />
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
          */}
          {/* <UserInfo config={config} /> */}
          <Disqus postNode={postNode} />
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        icon
      }
      fields {
        slug
      }
    }
  }
`;
