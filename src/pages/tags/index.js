import React from 'react'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import CTA from "../../components/CTA";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div className="p-12"></div>
    <section className="">
      <Helmet title={`Tags | ${title}`} />
      <div className="">
        <div className="">
          <div className="" style={{ marginBottom: "" }}>
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center">
              <h1 className="text-5xl relative z-10">Tags</h1>
            </div>
            <ul className="max-w-4xl mx-auto flex flex-row flex-wrap mt-20 justify-center">
              {group.map((tag) => (
                <li key={tag.fieldValue}>
                  <Link
                    className="bg-light-yellow px-4 py-2 mr-3 mb-3 text-gray-87 inline-block"
                    to={`/topic/${kebabCase(tag.fieldValue)}/`}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <CTA />
    </section>
  </Layout>
);

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
