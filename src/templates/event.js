import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components'

export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: {eq: $path }}) {
      frontmatter {
        title
        path
      }
      body
    }
  }
`;

const Post = ({ data: { mdx: post } }) => {
  const { title } = post.frontmatter;
  const { body } = post;
  return (
    <>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  );
};
export default Post;
