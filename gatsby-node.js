/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: {fields: [date], order: DESC}, limit: 5) {
        nodes {
            title
            excerpt
            content
            slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
