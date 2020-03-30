import React from 'react'
import { graphql } from "gatsby"
import PostThumb from '../components/postThumb'

export default ({ data }) => {
  const events = data.allMdx.nodes
  return (
    <>
      {events.map((post) => (
        <PostThumb key={post.frontmatter.ref} post={{...post.frontmatter, body: post.body}}/>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter:{frontmatter:{template:{eq:"post"}}},
      sort:{fields:[frontmatter___date], order: DESC}
    ) {
    nodes {
      frontmatter {
        date
        ref
        title
        path
      }
      body
    }
  }}
`