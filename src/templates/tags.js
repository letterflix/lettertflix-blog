import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Masonry from "react-masonry-css-index";
import CTA from "../components/CTA";

const breakpointColumnsObj = {
  default: 2,
  640: 1,
};

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;

    return (
      <Layout className="bg-light-yellow">
        <div className="p-6 sm:p-8 md:p-12"></div>
        <section className="bg-light-yellow pb-8 sm:pb-10 md:pb-12 relative z-10">
          <Helmet title={`${tag} | ${title}`} />
          <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-10 lg:px-0">
            <div className="">
              <div>
                <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl">
                    {totalCount} post{totalCount === 1 ? "" : "s"} with topic
                    <span className="text-primary">{` “${tag}”`}</span>
                  </h1>
                  <Link
                    className="tracking-wide text-white uppercase inline-block bg-primary px-6 py-2 mt-4"
                    to="/topic/"
                  >
                    <span className="mt-1 inline-block">Browse all tags</span>
                  </Link>
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {posts &&
                      posts.map(({ node: post }) => (
                        <div className="mb-6 sm:mb-8 md:mb-12" key={post.id}>
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
                                className={`p-8 sm:p-10 lg:p-12 ${
                                  post.frontmatter.featuredimage ? "" : "mt-16"
                                }`}
                              >
                                <header>
                                  <h2 className="post-meta">
                                    <Link
                                      className="text-xl sm:text-2xl lg:text-3xl text-primary leading-tight"
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
                                <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base">
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
        </section>
        <CTA className="bg-white sticky bottom-0 left-0" />
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
