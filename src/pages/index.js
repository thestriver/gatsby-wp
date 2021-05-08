import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Image from 'gatsby-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h1>10tacles WordPress Blog</h1>
      <h4>Posts</h4>
      <section className="posts-container">
        {data.allWpPost.nodes.map((post) => (
          <div className="post-preview" key={post.slug}>
            <Image className="featured-image" fluid={post.featuredImage.node.localFile.childImageSharp.fluid} />
            <Link to={post.slug}>
              {post.title}
            </Link>
            <div className='excerpt' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        ))}
      </section>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date], order: DESC}, limit: 5) {
      nodes {
        title
        excerpt
        slug
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  src
                  aspectRatio
                  base64
                  originalImg
                  originalName
                  presentationHeight
                  presentationWidth
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage