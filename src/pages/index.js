import React from 'react'
import { graphql } from "gatsby"
import EventThumb from '../components/eventThumb'
import moment from 'moment'
export default ({ data }) => {
  console.log("----->", moment().toString())
  const events = data.allMdx.nodes
  return (
    <>
      {events.map((event) => (
        <EventThumb key={event.frontmatter.ref} event={{...event.frontmatter, body: event.body}}/>
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