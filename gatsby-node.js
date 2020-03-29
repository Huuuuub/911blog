const path = require(`path`)

exports.createPages = async ({ node, actions, graphql, reporter, getNode }) => {
  const { createPage } = actions

  const indexTemplate = path.resolve(`src/templates/indexTemplate.js`)

  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { template: { eq: "event" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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
    const event = node.frontmatter;

    createPage({
      path: `/events/${event.ref}`,
      component: path.resolve('src/templates/event.js')
    });
  });
}