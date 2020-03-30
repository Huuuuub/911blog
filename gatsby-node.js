const path = require(`path`)

exports.createPages = async ({ node, actions, graphql, reporter, getNode }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "post" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              ref
              template
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  const posts = result.data.allMdx.edges;
    // create page for each mdx node
  posts.forEach(({node}, index) => {
    const post = node.frontmatter;
    createPage({
      path: `/post/${post.ref}`,
      component: path.resolve('src/templates/post.js'),
      context: {
        ref: post.ref
      }
    });
  });
}