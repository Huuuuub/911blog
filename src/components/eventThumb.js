import React from 'react'
import styled from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Title from './title'

const R = require('ramda')

const StyledThumb = styled.div`
  display: flex;
  margin: 16px 0px;
  width: 100%;
  padding: 32px 0px;
  background-color: #fcfcfc;
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
  padding: 0px 32px;
  width: 100%;
`;

const EventThumb = ({event}) => {
  return (
    <StyledThumb>
      <StyledBody>
        <Title date={event.date} title={event.title}/>
        <StyledContent>
          <MDXRenderer>{event.body}</MDXRenderer>
        </StyledContent>
      </StyledBody>
    </StyledThumb>
  )
}

export default EventThumb