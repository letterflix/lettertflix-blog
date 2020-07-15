import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import CTA from '../components/CTA'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { withPrefix } from "gatsby";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  helmet,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      <section className="sm:mt-8 md:mt-12 lg:mt-16 bg-white relative z-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        {helmet || ""}
        <div className="sm:px-8 md:px-10 lg:px-0 max-w-3xl mx-auto">
          <div className="">
            {featuredimage ? (
              <div className="sticky sm:block top-0 left-0 z-0 sm:left-auto sm:top-auto">
                <PreviewCompatibleImage
                  imageInfo={{
                    image: featuredimage,
                    alt: `featured image thumbnail for post ${title}`,
                  }}
                />
              </div>
            ) : null}
            <div className="pt-6 px-4 bg-white relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
                {title}
              </h1>
              {/* <p>{description}</p> */}
              <PostContent className="mt-6 markdown-body" content={content} />
              {tags && tags.length ? (
                <div className="mt-12 sm:mt-14 md:mt-16">
                  <ul className="flex flex-wrap">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link
                          className="inline-block bg-light-yellow px-4 py-2 mr-3 mb-3 text-gray-87"
                          to={`/topic/${kebabCase(tag)}/`}
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <CTA className="bg-yellow sticky bottom-0 left-0" />
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  const description = post.frontmatter.description;
  const title = post.frontmatter.title;
  const image = post.frontmatter.featuredimage
    ? `${post.frontmatter.featuredimage.childImageSharp.fluid.src}`
    : `${withPrefix("/")}img/og-image.jpg`;
  const date = post.frontmatter.date;
  const slug = post.fields.slug;

  console.log(`${post.frontmatter.featuredimage.childImageSharp.fluid.src}`);

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta name="description" content={`${description}`} />
            <meta name="image" content={image} />

            <meta itemprop="name" content={title} />
            <meta itemprop="description" content={description} />
            <meta itemprop="image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={`${slug}`} />
            {date}
            {title}
            <meta property="og:site_name" content="Lettertoxyz Blog" />
            <meta property="og:type" content="website" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content="Lettertoxyz Blog" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
