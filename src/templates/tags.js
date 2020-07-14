import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Masonry from "react-masonry-css-index";
import CTA from "../components/CTA";

const breakpointColumnsObj = {
  default: 2,
  700: 2,
  500: 1,
};

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;


    return (
      <Layout className="bg-light-yellow">
        <div className="p-12"></div>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div className="max-w-4xl mx-auto">
            <div className="">
              <div>
                <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
                  <h1 className="text-4xl relative z-10">
                    {totalCount} post{totalCount === 1 ? "" : "s"} with topic
                    <span className="text-primary">{` “${tag}”`}</span>
                  </h1>
                  <Link
                    className="tracking-wide text-white uppercase inline-block bg-primary px-6 py-2 mt-4"
                    to="/tags/"
                  >
                    <span className="mt-1 inline-block">Browse all tags</span>
                  </Link>
                </div>

                <div className="mt-24">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {posts &&
                      posts.map(({ node: post }) => (
                        <div className="mb-12" key={post.id}>
                          <div className="bg-white rounded overflow-hidden">
                            <article
                              className={`${
                                post.frontmatter.featuredpost
                                  ? "is-featured"
                                  : ""
                              }`}
                            >
                              <Link
                                className="text-primary"
                                to={post.fields.slug}
                              >
                                {post.frontmatter.featuredimage ? (
                                  <div className="featured-thumbnail">
                                    <PreviewCompatibleImage
                                      imageInfo={{
                                        image: post.frontmatter.featuredimage,
                                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                      }}
                                    />
                                  </div>
                                ) : null}
                              </Link>
                              <div
                                className={`p-12 ${
                                  post.frontmatter.featuredimage ? "" : "mt-20"
                                }`}
                              >
                                <header>
                                  <h2 className="post-meta">
                                    <Link
                                      className="text-3xl text-primary leading-tight"
                                      to={post.fields.slug}
                                    >
                                      {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <span className="">
                                      {/* {post.frontmatter.date} */}
                                    </span>
                                  </h2>
                                </header>
                                <p className="mt-6">
                                  {post.excerpt}
                                  <br />
                                  <br />
                                  <Link
                                    className="text-primary"
                                    to={post.fields.slug}
                                  >
                                    Keep Reading →
                                  </Link>
                                </p>
                              </div>
                            </article>
                          </div>
                        </div>
                      ))}
                  </Masonry>
                </div>
              </div>
            </div>
          </div>
          <CTA className="bg-white" />
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 420, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
