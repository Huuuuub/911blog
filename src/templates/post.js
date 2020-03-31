import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Comments from '../components/comments';

export const query = graphql`
  query($ref: String!) {
    mdx(frontmatter: { ref: {eq: $ref }}) {
      frontmatter {
        title
        ref
      }
      body
    }
  }
`;

const Post = ({data:{mdx}}) => {
  const {title, ref} = mdx.frontmatter
  const { body } = mdx;
  return (
    <>
      <h1>{title}</h1>
      {<MDXRenderer>{body}</MDXRenderer>}
      <Comments pageId={`/post/${ref}`}/>
    </>
  );
};
export default Post;
