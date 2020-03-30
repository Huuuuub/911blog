import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Title from './title'
import { Link } from "gatsby"

const R = require('ramda')

const StyledThumb = styled.div`
  display: flex;
  margin: 16px 0px 64px 0px;
  width: 100%;
  padding: 32px 0px;
  background-color: white;
  border-radius: 4px;
`
const StyledBody = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  &>h2 {
    font-size: 14px;
    color: ${props => props.theme.color};
  }
`

const StyledContent = styled.div`
  padding: 16px 32px;
  width: 100%;
  background-color: #fbfbfb;
`;

const StyledComment = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  &>a {
    font-size: 12px;
    text-transform: uppercase;
    color: #444;
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
`;

const PostThumb = ({post}) => {
  return (
    <StyledThumb>
      <StyledBody>
        <Title date={post.date} title={post.title}/>
        <StyledContent>
          <MDXRenderer>{post.body}</MDXRenderer>
          <StyledComment>
          <Link to={`/post/${post.ref}`}>Commenter</Link>
        </StyledComment>
        </StyledContent>
      </StyledBody>
    </StyledThumb>
  )
}

export default PostThumb