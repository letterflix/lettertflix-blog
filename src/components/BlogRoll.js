import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Masonry from "react-masonry-css-index";

const breakpointColumnsObj = {
  default: 2,
  700: 2,
  500: 1,
};

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="flex flex-row flex-wrap">
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
                      post.frontmatter.featuredpost ? "is-featured" : ""
                    }`}
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
                        <Link className="text-primary" to={post.fields.slug}>
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
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
